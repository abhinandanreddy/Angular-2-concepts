/**
 * Created by abhi on 4/16/2017.
 */

import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'filter1'
})

export class SearchFilter implements PipeTransform{

    transform(modelObject:any, searchTerm:any):any{

        if(searchTerm === undefined){
            return modelObject;
        }
        else{
            return modelObject.filter(function(obj){
                  return obj.name.toLowerCase().includes(searchTerm.toLowerCase());
            })
        }
    }
}
