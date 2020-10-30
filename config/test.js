const a = () => {
    const b = (x) => {
        console.log(x);
    }
}
a()
a.b()



const initValidation = () => {
    // irrelevant code here
    const validate = (_block) => {
        console.log( "test", _block );
    }

    initValidation.validate = validate;
}

initValidation();
initValidation.validate( "hello" );
//test hello



// function initValidation()
// {
//     // irrelevant code here
//     function validate(_block){
//         console.log( "test", _block );
//     }

//     initValidation.validate = validate;
// }

// initValidation();
// initValidation.validate( "hello" );
// //test hello