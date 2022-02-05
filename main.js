const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const orchestraButton = document.getElementById("orchestra");
const tennisButton = document.getElementById("tennis");
const soccerButton = document.getElementById("soccer");
const ansWord = document.getElementById("ans_word");
const photo = document.getElementById("photo");
const nameInput = document.getElementById("name-input");
const checkButton = document.getElementById("check");
const answerContainer = document.getElementById("answer_container");
let names = [];
const r = alphabet.indexOf("r");
const y = alphabet.indexOf("y");
const o = alphabet.indexOf("o");
const d = [r, y, o];
console.log(r);
const checkAcuracy = (name) => {
  let final_distance = "";
  let distance_list = [];
  for (let i = 0; i < name.length; i++) {
    let x = alphabet.indexOf(name[i]);

    if (x != -1) {
      distance_list.push(Math.abs(x - d[i]));
    } else {
      distance_list.push("NaN");
    }
  }

  distance_list.map((distance) => {
    final_distance += `${distance}  `;
  });
  return final_distance;
};

const answers = {};

checkButton.onclick = () => {
  answerContainer.textContent = "";
  //inputを取得
  const name = nameInput.value;
  const x = { name: name, nameL: name.toLowerCase() };
  names.push(x);
  for (let i = 0; i < names.length; i++) {
    const div = document.createElement("div");
    const contennt = checkAcuracy(names[i].nameL);
    div.textContent = `${names[i].name} || ${contennt}`;
    answerContainer.append(div);
  }
  nameInput.value = "";
};

orchestraButton.onclick = () => {
  const div = document.createElement("div");
  ansWord.textContent = "ヴァイオリンは引けます。けど部活じゃないです";
  photo.src = "violin.jpg";
  ansWord.append(div);
};

tennisButton.onclick = () => {
  const div = document.createElement("div");
  ansWord.textContent = "正解！！\n3回戦が自己ベストなので強くはないよ";
  photo.src = "IMG_0104.jpg";
  ansWord.append(div);
};

soccerButton.onclick = () => {
  const div = document.createElement("div");
  ansWord.textContent = "部活じゃないよ。よくやってたけど、違うよ";
  photo.src =
    "https://with-asset.chouseisan.com/uploads/2018/07/22160230/Tlig59ZXVbQyhT9I1WL7SQkIt3GiQ7L1n8tbpWQC.jpeg";
};
