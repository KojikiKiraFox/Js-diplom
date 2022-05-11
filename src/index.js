import contacts from "./modules/contacts";
import menu from './modules/menu';
import scroll from './modules/scroll';
import maskPhone from './modules/maskPhone';
import formula from './modules/formula';
import accordion from './modules/accordion'
import validator from './modules/validator'
import repair from './modules/repair'
import sendForm from './modules/sendForm'
import closeModal from './modules/closeModal'
import documentTransparency from "./modules/documentTransparency"
import privacyPoliceAndRepair from "./modules/privacyPoliceAndRepair"
import portfolioModal from "./modules/portfolioModal"
import sliderPortfolio from './modules/sliderPortfolio'
import popupOpenConsultation from './modules/popupOpenConsultation'
import sliderReviews from './modules/sliderReviews'
import loadingDate from './modules/loadingDate'



sliderReviews()
loadingDate()


contacts()
menu()
scroll()
maskPhone()
formula()
accordion()
validator()
repair()
closeModal()
documentTransparency()
popupOpenConsultation()
privacyPoliceAndRepair()
portfolioModal()
sliderPortfolio()
sendForm({
    formId: 'feedback1',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input1'
        }
    ]
});
sendForm({
    formId: 'feedback2',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input2'
        }
    ]
});
sendForm({
    formId: 'feedback3',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input3'
        }
    ]
});
sendForm({
    formId: 'feedback4',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input4'
        }
    ]
});
sendForm({
    formId: 'feedback5',
    someElem: [
        {
            type: 'block',
            id: 'feedback-input5'
        }
    ]
});