import yaml from 'js-yaml';
import {
    data
} from './data/data.yml';

function getData(name) {    
    var computedData = yaml.load(data);
    computedData = computedData[name];
            
    if(computedData.length == undefined){
        try{    
            if(computedData.logo != undefined){
                computedData.logo = require(`${computedData.logo}`);
            }
            else if(computedData.logo == null){
                computedData.logo = require("./imgs/default_entity.png");    
            }
        }catch(e){
            computedData.logo = require("./imgs/default_entity.png");    
        }
    }

    for(var i =0; i <= computedData.length; i++){
        try{    
            if(computedData[i] != undefined){
                if(computedData[i].logo != undefined){
                    computedData[i].logo = require(`${computedData[i].logo}`);
                }
                else if(computedData[i].logo == null){
                    computedData[i].logo = require("./imgs/default_entity.png");    
                }
            }
        }catch(e){
            computedData[i].logo = require("./imgs/default_entity.png");    
        }
    }
    return { data: computedData };
}

export {
    getData
}
