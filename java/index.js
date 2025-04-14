let inheritance = +prompt("ما مقدار الميراث؟");
let hasWife = +prompt("هل لديه زوجة؟ (1 تعني نعم، 0 تعني لا)");

let wifeShare = 0;
if (hasWife === 1) {
  wifeShare = inheritance * 0.25;
  console.log("نصيب الزوجة هو: " + wifeShare);
} else {
  console.log("لا يوجد زوجة، لا نصيب.");
}

let remainingAfterWife = inheritance - wifeShare;

let boysNumber = 0;
let girlsNumber = 0;

let hasChildren = +prompt("هل لديه أبناء أو بنات؟ (1 تعني نعم، 0 تعني لا)");
if (hasChildren === 1) {
  boysNumber = +prompt("كم عدد الأولاد؟");
  girlsNumber = +prompt("كم عدد البنات؟");

  let totalShares = (boysNumber * 2) + (girlsNumber * 1);

  if (totalShares > 0) {
    let shareUnit = remainingAfterWife / totalShares;

    if (boysNumber > 0) {
      console.log("نصيب كل ولد: " + (shareUnit * 2));
    }

    if (girlsNumber > 0) {
      console.log("نصيب كل بنت: " + (shareUnit * 1));
    }
  } else {
    console.log("لم يتم إدخال عدد صحيح للأبناء أو البنات.");
  }
} else {
  console.log("لا يوجد أبناء أو بنات.");
}
