// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`
  getInstruction('mashedPotatoes', 1, (step2) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step2}</li>`
    getInstruction('mashedPotatoes', 2, (step3) => {
      document.querySelector('#mashedPotatoes').innerHTML += `<li>${step3}</li>`
      getInstruction('mashedPotatoes', 3, (step4) => {
        document.querySelector('#mashedPotatoes').innerHTML += `<li>${step4}</li>`
        getInstruction('mashedPotatoes', 4, (step5) => {
          document.querySelector('#mashedPotatoes').innerHTML += `<li>${step5}</li>`
          document.querySelector('#mashedPotatoes').innerHTML += `<li>Mashed potatoes are ready!</li>`
          document.querySelector('#mashedPotatoesImg').removeAttribute('hidden');
        }, (err) => console.log(err));
      }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));
}, (err) => console.log(err));






// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (stepResult) => {
    document.querySelector("#steak").innerHTML += `<li>${stepResult}</li>`; 
  return obtainInstruction('steak', 1)}
  )
  .then((stepResult) => {
    document.querySelector("#steak").innerHTML += `<li>${stepResult}</li>`; 
  return obtainInstruction('steak', 2)})

  .then((stepResult) => {
    document.querySelector("#steak").innerHTML += `<li>${stepResult}</li>`; 
  return obtainInstruction('steak', 3)})

  .then((stepResult) => {
    document.querySelector("#steak").innerHTML += `<li>${stepResult}</li>`; 
  return obtainInstruction('steak', 4)})

  .then((stepResult) => {
    document.querySelector("#steak").innerHTML += `<li>${stepResult}</li>`; 
  return obtainInstruction('steak', 5)})

  .then((stepResult) => {
    document.querySelector("#steak").innerHTML += `<li>${stepResult}</li>`; 
  return obtainInstruction('steak', 6)})

  .then((stepResult) => {
    document.querySelector("#steak").innerHTML += `<li>${stepResult}</li>`; 
  return obtainInstruction('steak', 7)})
    
  .then((stepResult) => {
    document.querySelector("#steak").innerHTML += `<li>${stepResult}</li>`;
    document.querySelector('#steak').innerHTML += `<li>Steak is Ready!`;
    document.querySelector('#steakImg').removeAttribute('hidden');
  })
  .catch((err) => {
    console.log(err)
  });

// Iteration 3 using async/await
async function makeBroccoli() {
 try {
   let step0 = await obtainInstruction('broccoli', 0);
   document.querySelector('#broccoli').innerHTML += `<li>${step0}</li>`;
   let step1 = await obtainInstruction('broccoli', 1);
   document.querySelector('#broccoli').innerHTML += `<li>${step1}</li>`;
   let step2 = await obtainInstruction('broccoli', 2);
   document.querySelector('#broccoli').innerHTML += `<li>${step2}</li>`;
   let step3 = await obtainInstruction('broccoli', 3);
   document.querySelector('#broccoli').innerHTML += `<li>${step3}</li>`;
   let step4 = await obtainInstruction('broccoli', 4);
   document.querySelector('#broccoli').innerHTML += `<li>${step4}</li>`;
   let step5 = await obtainInstruction('broccoli', 5);
   document.querySelector('#broccoli').innerHTML += `<li>${step5}</li>`;
   let step6 = await obtainInstruction('broccoli', 6);
   document.querySelector('#broccoli').innerHTML += `<li>${step6}</li>`;
   document.querySelector('#broccoli').innerHTML += `<li>Broccoli is ready!</li>`;
   document.querySelector('#broccoliImg').removeAttribute('hidden');
  } catch(err) {
    console.log(err);
  }
}; makeBroccoli();

// // Bonus 2 - Promise all
// let step1 = await obtainInstruction('brusselsSprouts', 0);

// let step2 = await obtainInstruction('brusselsSprouts', 1);

// let step3 = await obtainInstruction('brusselsSprouts', 2);

// let step4 = await obtainInstruction('brusselsSprouts', 3);

// let step5 = await obtainInstruction('brusselsSprouts', 4);

// let step6 = await obtainInstruction('brusselsSprouts', 5);

// let step7 = await obtainInstruction('brusselsSprouts', 6);

// let step8 = await obtainInstruction('brusselsSprouts', 7);

// Promise.all([step1, step2, step3, step4, step5, step6, step7, step8]).then((values) => {
//   document.querySelector('#broccoli').innerHTML += `<li>${values}</li>`;
//   document.querySelector('#broccoli').innerHTML += `<li>Brussels Sprouts are ready!</li>`
//   document.querySelector('#broccoli').removeAttribute('hidden');
// });