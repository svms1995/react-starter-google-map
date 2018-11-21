import moment from 'moment';
import Cookie from 'js-cookie';

class Helper {
    
    dateFormat:string = 'DD/MM/YYYY';
    dateTimeFormat:string = 'DD/MM/YYYY LT';

    constructor() {

        this.displayDate = this.displayDate.bind(this);
        this.displayDateTime = this.displayDateTime.bind(this);
        this.range = this.range.bind(this);
        this.deepFind = this.deepFind.bind(this);
    }
    /**
     * To Display the Date
     * @param date 
     */
    displayDate(date, format)  {
        
        return date ? moment(date).format(format? format : this.dateFormat) : 'N/A';
    }

    /**
     * To Display the DateTime
     * @param date 
     */
    displayDateTime(date, format) {

        return date ? moment(date).format(format? format : this.dateTimeFormat) : 'N/A';
    }
    /**
     * TO get Array of selected Range
     * @param start 
     * @param stop 
     * @param step 
     */
    range(start, stop, step) {

        if (typeof stop == 'undefined') {
            // one param defined
            stop = start;
            start = 0;
        }
    
        if (typeof step == 'undefined') {
            step = 1;
        }
    
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [start];
        }
    
        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
    
        return result;
    }

    /**
     * TO Check user Login
     */
    isLogin() {

        return Cookie.get('access_token') ? true : false;
    }

    /**
     * To check if server data has changed..
     */
     
    shouldUpdate(next, prev, keys) {

        var isChange: boolean = false;

        keys.map(key => {
            const nextState = next.rootState.server[key] ? next.rootState.server[key].shouldUpdate: false;
            const prevState = prev.rootState.server[key] ? prev.rootState.server[key].shouldUpdate : false;

            if(nextState !== prevState){
                isChange = true;
            }
            
        })
        return isChange;
    }

    /**
     * Find the key deep in object.
     * @param obj 
     * @param path 
     */
    deepFind(obj, path, defaultValue) {

        var paths = path.split('.')
          , current = obj
          , i;
      
        for (i = 0; i < paths.length; ++i) {

          if (!current || current[paths[i]] === undefined) {
              
            return defaultValue;
          } else {
            current = current[paths[i]];
          }
        }
        return current;
    }

    /**
     * TO check given veriable is a array
     * @param value 
     */
    isArray (value) {

        return value && typeof value === 'object' && value.constructor === Array;
    }

    /**
     * Covert Query string to Object
     */
    queryStringToObject(url) {
        
        var params: {[key: string]: any} = {};
        
        var parser = document.createElement('a');
        parser.href = url;
        var query = parser.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    }

    /**
     * Convert Query Object to Query String
     * @param obj 
     * @param prefix 
     */
    queryString(obj, prefix) {
        var str = [],
          p;
        for (p in obj) {
          if (obj.hasOwnProperty(p)) {
            var k = prefix ? prefix + "[" + p + "]" : p,
              v = obj[p];
            str.push((v !== null && typeof v === "object") ?
              this.queryString(v, k) :
              encodeURIComponent(k) + "=" + encodeURIComponent(v? v : ''));
          }
        }
        return str.join("&");
      }

    /**
     * To check the given Veribale is Object
     * @param value 
     */
    isObject (value) {
        return value && typeof value === 'object' && value.constructor === Object;
    }

    /**	
     * to Check pattern is matched in given array
     */
    strMatchInArray(str, arr) {

        var index = -1;
        arr.map((v, k) => {
            if(str.match(v)){
                index = k;
            }
        });

        return index;
    }
    /**
     * To check the value data type is float the integer
     * @param n 
     */
    isFloat(n ){
        n = parseFloat(n);
        return Number(n) === n && n % 1 !== 0;
    }


}

export default Helper;