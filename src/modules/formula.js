const formula = () => {

 const formula = document.getElementById('formula')
  const elem = []



  formula.addEventListener('mouseover', (e) =>{
    if (window.innerWidth < 1024) { 
     return
    }
    if (e.target.closest('.formula-item__icon')) {
      const item = e.target.closest('.formula-item')
      item.style.zIndex = '1'

      item.classList.add('active-item')

      elem[0] = item

      const formulaItem = item.querySelector('.formula-item-popup')

      openFormula(formulaItem, item)
    }
  })

  formula.addEventListener('mouseout', (e) =>{
    if (window.innerWidth < 1024) { 
     return
    }

    if (elem[0]) {

      const item = elem[0]
      item.style.zIndex = 0
      item.classList.remove('active-item')
      const itemIcon = e.target.closest('.formula-item__icon')

      if (!itemIcon) {
        return
      }

      const formulaItem  = itemIcon.querySelector('.formula-item-popup')
      closeFormula(formulaItem)
    }
  })

  const openFormula = (formulaItem, item) =>{

    let y = formulaItem.getBoundingClientRect().y

    let indent = +item.getBoundingClientRect().height

    window.addEventListener('scroll', function() {
    });
    if (y < 0) {

      formulaItem.style.cssText = `
      bottom: 0px;
      top: ${indent*1.1}px;
      `
      formulaItem.classList.add('flipTo')
    }
  }

  const closeFormula = (formulaItem) =>{
    formulaItem.style.cssText = `
      bottom: 90px;`
      formulaItem.classList.remove('flipTo')
  }

}

export default formula   