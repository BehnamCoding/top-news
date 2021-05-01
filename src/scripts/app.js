// imports
import handle from './handle';
import ui from './ui';


// variables
const btn_search = document.querySelector('#btn-search');
const name_input = document.querySelector('#name');
const country_input = document.querySelector('#country-select');
const category_input = document.querySelector('#category-select');


// loadEventListener
loadAllEvents();

function loadAllEvents() {

    btn_search.addEventListener('click', searchFunc);

}


// functions

// searchFunc
function searchFunc() {
    // get inputs
    const name = name_input.value;
    const country = country_input.value;
    const category = category_input.value;

    // fetch url
    if (name == '' && country == '' && category == '') {
        ui.showMessage('please fill at least one input.', 'danger');
    } else {
        handle.queryAPI(name , country , category)
        .then(Response => {
            return Response.json();
        }).then(data => {
            // get data array
            const items = data.articles;
            if(items.length > 0) {
                // clear ative items
                document.querySelector('#card-main').innerHTML = '';
                // set new items
                ui.showItems(items);
            } else {
                ui.showMessage('there is no news with your filtering.' , 'warning');
            }
        })
        .catch(err => console.log(err))
    }
}
