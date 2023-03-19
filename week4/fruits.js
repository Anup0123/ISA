
function getFruit(fruit) {
    return new Promise((resolve, reject) => {
      if (fruit=== 'watermelon') {
        setTimeout(() => {
          reject(("Sorry, we're out of watermelons."));
          }, 2000);
        }
        else {
            setTimeout(() => {
                resolve();
              }, 1000);
        }
        
      } );
  }

fruit=prompt('Enter the name of fruits:')
getFruit(fruit).then(document.body.innerHTML = `Here is your ${fruit}`).catch(err=>document.body.innerHTML=err)

