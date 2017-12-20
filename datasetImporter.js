const fs = require('fs');
const path = require('path');

const datasetPath = path.join(__dirname, 'resources/dataset/');
infoPath = path.join(datasetPath, 'restaurants_info.csv');
listPath = path.join(datasetPath, 'restaurants_list.json');
resultsPath = path.join(__dirname, 'enriched_restaurants_list.json');

let restaurantList = [];
let restaurantInfo = [];

let restaurantIndex = {};

const init = () => {
    console.log('*** Open restaurant list ***')

    fs.readFile(listPath, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            restaurantList = JSON.parse(data);
            restaurantIndex = restaurantList.reduce((acc,el,index) => {
                acc[el.objectID] = index;
                return acc;
            }, {});

            merge();
        } else {
            console.log(err);
        }
    });
}

const merge = () => {
    console.log('*** Open restaurant infos and merge them with list ***')

    fs.readFile(infoPath, {encoding: 'utf-8'}, function(err,rawData){
        if (!err) {
            const data = rawData.split('\n');

            const columns = data[0].split(';');
            data.map((el, index)=> {
                const values = el.split(';');
                const restaurant = restaurantList[restaurantIndex[values[0]]];

                if (restaurant) // first line and last line -> undefined
                {
                    for (var i= 1; i<values.length; i++) {
                        restaurant[columns[i]] = values[i];
                    }
                }

            });
            cleanPaymentOptions();
            write();
        } else {
            console.log(err);
        }
    });
}

const cleanPaymentOptions = () => {
    const replace = (o) => {
        if (['AMEX', 'Visa', 'Discover', 'MasterCard'].indexOf(o) === -1) {
            return 'Discover';
        }
        return o;
    }

    restaurantList = restaurantList.map(rest=> Object.assign({}, rest, {
        payment_options : rest.payment_options.map((opt) => replace(opt))
    }));


}

const write = () => {
    console.log('*** Write results back on disk ***')

    fs.writeFile(resultsPath, JSON.stringify(restaurantList), {encoding: 'utf-8'}, function(err,rawData){
        if (!err) {
            console.log('successfully saved enriched restaurant list on disk');
        } else {
            console.log(err);
        }
    });
}

init();
