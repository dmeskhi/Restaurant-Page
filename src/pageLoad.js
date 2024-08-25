import createRestaurantHomePage from './restaurant';
import createNav from './navigation';

function initialLoad() {
    createNav();
    createRestaurantHomePage();
}

export default initialLoad;
