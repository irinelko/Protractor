let homepage = function(){

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));
    var elems = element.all(by.xpath('*'));

    this.get = function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    }

    this.enterFirstNumber = function (a){
        firstNumber.sendKeys(a);
    };

    this.enterSecondNumber = function (b){
        secondNumber.sendKeys(b);
    };

        this.clickGo = function (){
        goButton.click();
    };

    this.verifyResult = function(result){
        let output=latestResult.getText();
        expect(output).toEqual(result);
    };

    this.addNumbers = function (a,b){
        this.enterFirstNumber(a);
        this.enterSecondNumber(b);
        this.clickGo();
    };
};

module.exports = new homepage();