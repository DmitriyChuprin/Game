let Container = PIXI.Container,
    loader = PIXI.Loader.shared,
    Sprite = PIXI.Sprite;


let app = new PIXI.Application({width: 898, height: 649});
let appWidth = app.renderer.width;
let appHeight = app.renderer.height;

document.body.appendChild(app.view);


loader
    .add("images/image_atlas.json")
    .load(setup);


function setup() {

    let bgBigPurple = new Sprite(loader.resources["images/image_atlas.json"].textures["bg_big_purple.png"]);
    bgBigPurple.x = (appWidth - bgBigPurple.width) / 2 ;
    bgBigPurple.y = (appHeight - bgBigPurple.height) / 2;
    app.stage.addChild(bgBigPurple);
    let btnPurpleNormal = new Sprite(loader.resources["images/image_atlas.json"].textures["btn_purple_norm_en.png"]);
    btnPurpleNormal.x = bgBigPurple.x + 75;
    btnPurpleNormal.y = bgBigPurple.y + 150;
    app.stage.addChild(btnPurpleNormal);
    let btnPurpleNormalDis = new Sprite(loader.resources["images/image_atlas.json"].textures["btn_purple_norm_dis.png"]);
    btnPurpleNormalDis.x = btnPurpleNormal.x + btnPurpleNormal.width + 5;
    btnPurpleNormalDis.y = bgBigPurple.y + 150;
    app.stage.addChild(btnPurpleNormalDis);
    let bigPurpleBoardGift = new Sprite(loader.resources["images/image_atlas.json"].textures["bg_big_purple_board_gift.png"]);
    bigPurpleBoardGift.x = bgBigPurple.x + (bgBigPurple.width - bigPurpleBoardGift.width) / 2 + 15;
    bigPurpleBoardGift.y = bgBigPurple.y + (bgBigPurple.height - bigPurpleBoardGift.height) / 2 + 52; 
    app.stage.addChild(bigPurpleBoardGift);
    let bgBigPurpleTitle = new Sprite(loader.resources["images/image_atlas.json"].textures["bg_big_purple_title.png"]);   
    bgBigPurpleTitle.x = bgBigPurple.x + (bgBigPurple.width - bgBigPurpleTitle.width) / 2;
    bgBigPurpleTitle.y = bgBigPurple.y + 10;
    app.stage.addChild(bgBigPurpleTitle); 
    let winBtnGreenNorm = new Sprite(loader.resources["images/image_atlas.json"].textures["WIN_btn_green_norm.png"]);   
    winBtnGreenNorm.x = bgBigPurple.x + (bgBigPurple.width - winBtnGreenNorm.width) / 2;
    winBtnGreenNorm.y = (bgBigPurple.y + bgBigPurple.height) - winBtnGreenNorm.height - 15;
    //winBtnGreenNorm.scale.x = 1.5;
    //winBtnGreenNorm.scale.y = 1.5;
    app.stage.addChild(winBtnGreenNorm); 
    let giftMouseB = new Sprite(loader.resources["images/image_atlas.json"].textures["WIN_gift_mouseB.png"]);
    giftMouseB.x = bgBigPurple.x - giftMouseB.width / 4 + 5;
    giftMouseB.y = appHeight-giftMouseB.height - 30;
    app.stage.addChild(giftMouseB);
    let giftMouseW = new Sprite(loader.resources["images/image_atlas.json"].textures["WIN_gift_mouseW.png"]);
    giftMouseW.x = bgBigPurple.x + (bgBigPurple.width/2) + 130 ;
    giftMouseW.y = bgBigPurple.y - 23;
    app.stage.addChild(giftMouseW);
    

}