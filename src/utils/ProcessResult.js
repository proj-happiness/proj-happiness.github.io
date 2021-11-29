export default class ProcessResult{
    constructor(data){
        this.data = data;
        this.introvertPercentage = undefined;
        this.eitherPercentage = undefined;
        this.extrovertPercentage = undefined;   
        this.biggerPercentage = undefined;
        (
            () => {
                this.eitherPercentage = this.solveEither();
                this.introvertPercentage = this.solveIntrovert();
                this.extrovertPercentage = 100 - this.eitherPercentage - this.introvertPercentage;
            
                this.biggerPercentage = Math.max(this.eitherPercentage, this.introvertPercentage, this.extrovertPercentage);
            }
        )();
    }

    filterIntrovert(){
        return this.data.filter(item => item.answer === 'extrovert-no' || item.answer === 'introvert-yes');
    }
    filterEither(){
    return this.data.filter(item => item.answer === 'introvert-either' || item.answer === 'extrovert-either');
    }
    solveIntrovert(){
        return (this.filterIntrovert().length / 10) * 100;
    }
    solveEither(){
        return ((this.filterEither().length / 10) * 100)/2;
    }
}