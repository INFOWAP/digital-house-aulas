contAno = (callback) => {
    setTimeout(function () {
        return console.log(`Feliz ano novo!!!`);
        callback();
    }, 2000);

};
anoNovo = () => {
    var i;
    var regr;
    for (i = 10; i > 0; i--) {
        console.log(i);
    };
};

anoNovo();
contAno();