export default class DateManager {
    static convert = (dateData, type) => {
        const date =  new Date(dateData);
        if(type==='yyyy-mm-dd') {
            return `${date.getFullYear()  }-${  date.getMonth()+1 < 10 ?  `0${date.getMonth() + 1}` : date.getMonth() + 1 }-${  date.getDate() <10 ? `0${date.getDate()}`: date.getDate()}`;
        }if(type==='yyyy/mm/dd') {
            return `${date.getFullYear()  }/${  date.getMonth()+1  < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1 }/${  date.getDate() <10 ? `0${date.getDate()}`: date.getDate()}`;
        }
        if(type==='aa/pp') {
            return `${date.getHours() > 12 ? '오후':'오전'} ${date.getHours() > 12 ? `0${date.getHours()-12}`:date.getHours()}:${date.getMinutes() <10 ? `0${date.getMinutes()}`: date.getMinutes()}`;
        }
        if(type==='년/월/일') {
             return `${date.getFullYear()  }년 ${  date.getMonth()+1 < 10 ?  `0${date.getMonth() + 1}` : date.getMonth() + 1 }월 ${  date.getDate() <10 ? `0${date.getDate()}`: date.getDate()}일`;
        }
        return 0;
    }
}