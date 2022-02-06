const pressed = [];
const secrectCode = 'wesbos';


window.addEventListener('keydown', (e) => {
  console.log(pressed);
  pressed.push(e.key);
  pressed.splice(-secrectCode - 1, pressed.length - secrectCode.length);

  if (pressed.join('').includes(secrectCode)) {
    cornify_add();
  }
});