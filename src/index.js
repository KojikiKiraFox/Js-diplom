import contacts from "./modules/contacts";
import menu from './modules/menu';
import scroll from './modules/scroll';
import modal from './modules/modal';
import maskPhone from './modules/maskPhone';
import formula from './modules/formula';
import accordion from './modules/accordion'
import validator from './modules/validator'
import repair from './modules/repair'
import sendForm from './modules/sendForm'
import closeModal from './modules/closeModal'
import popupThank from './modules/popupThank'
import privacyPolicy from './modules/privacyPolicy'
import document from './modules/document'






contacts()
menu()
scroll()
modal()
maskPhone()
formula()
accordion()
validator()
repair()

closeModal()
popupThank()
privacyPolicy()
document()
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







