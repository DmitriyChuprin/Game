 //import allfriends from "./js/friends.js";

 let Container = PIXI.Container,
     loader = PIXI.Loader.shared,
     Sprite = PIXI.Sprite,
     Text = PIXI.Text;
 let schet = 0;
 let length = 0;

 let app = new PIXI.Application({ width: 898, height: 649 });
 let appWidth = app.renderer.width;
 let appHeight = app.renderer.height;
 document.body.appendChild(app.view);

 loader
     .add("images/image_atlas.json")
     .load(setup);


 function setup() {
     access();
     getAll();
     listFriends();


 }

 function getAll() {
     let bgBigPurple = new Sprite(loader.resources["images/image_atlas.json"].textures["bg_big_purple.png"]);
     bgBigPurple.x = (appWidth - bgBigPurple.width) / 2;
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
     let winBtnGreenOver = new Sprite(loader.resources["images/image_atlas.json"].textures["WIN_btn_green_over.png"]);
     winBtnGreenNorm.x = bgBigPurple.x + (bgBigPurple.width - winBtnGreenNorm.width) / 2 - 40;
     winBtnGreenNorm.y = (bgBigPurple.y + bgBigPurple.height) - winBtnGreenNorm.height - 15;
     winBtnGreenNorm.scale.x = 1.5;
     winBtnGreenNorm.interactive = true;
     winBtnGreenNorm.buttonMode = true;
     winBtnGreenNorm.on('click', onClick);
     //winBtnGreenNorm.scale.y = 1.5;
     app.stage.addChild(winBtnGreenNorm);
     let btnCloseNorm = new Sprite(loader.resources["images/image_atlas.json"].textures["WIN_btn_close_norm.png"]);
     btnCloseNorm.x = bgBigPurple.x + bgBigPurple.width - 55;
     btnCloseNorm.y = bgBigPurple.y + 40;
     app.stage.addChild(btnCloseNorm);
     let btnArrowOver1 = new Sprite(loader.resources["images/image_atlas.json"].textures["WIN_btn_arrow_over.png"]);
     btnArrowOver1.rotation = 0.5;
     btnArrowOver1.x = bgBigPurple.x + 100;
     btnArrowOver1.y = bgBigPurple.height / 2 + 120;
     btnArrowOver1.interactive = true;
     btnArrowOver1.buttonMode = true;
     btnArrowOver1.on('click', previous);
     app.stage.addChild(btnArrowOver1);
     let btnArrowOver2 = new Sprite(loader.resources["images/image_atlas.json"].textures["WIN_btn_arrow_over.png"]);
     btnArrowOver2.rotation = 1.5;
     btnArrowOver2.x = bgBigPurple.x + bgBigPurple.width - 50;
     btnArrowOver2.y = bgBigPurple.height / 2 + 120;
     btnArrowOver2.interactive = true;
     btnArrowOver2.buttonMode = true;
     btnArrowOver2.on('click', next);
     app.stage.addChild(btnArrowOver2);
     let giftMouseB = new Sprite(loader.resources["images/image_atlas.json"].textures["WIN_gift_mouseB.png"]);
     giftMouseB.x = bgBigPurple.x - giftMouseB.width / 4 + 5;
     giftMouseB.y = appHeight - giftMouseB.height - 30;
     app.stage.addChild(giftMouseB);
     let giftMouseW = new Sprite(loader.resources["images/image_atlas.json"].textures["WIN_gift_mouseW.png"]);
     giftMouseW.x = bgBigPurple.x + (bgBigPurple.width / 2) + 130;
     giftMouseW.y = bgBigPurple.y - 23;
     app.stage.addChild(giftMouseW);
     let message = new Text("Выберите друзей", {
         font: "bold 40px Arial",
         fill: "#412d73",
         align: "center",
         fontWeight: "bolder",
         stroke: "#ffffff",
         strokeThickness: 4,
         wordWrap: true,
         dropShadow: true,
         dropShadowColor: "#ffffff",
         dropShadowDistance: 1,
         dropShadowAngle: 0,
     });
     message.x = bgBigPurpleTitle.x + (bgBigPurpleTitle.width - message.width) / 2;
     message.y = bgBigPurpleTitle.y + (bgBigPurpleTitle.height - message.height) / 2 - 5;
     app.stage.addChild(message);
     let title = new Text("Выберите друзей, у которых хотите попросить жизнь", {
         fontFamily: "Arial",
         fontSize: "20px",
         fill: "#f9e006",
         align: "center",
         fontWeight: "bolder",
         stroke: "#412d73",
         strokeThickness: 3,
         wordWrap: true,
         wordWrapWidth: 400
     });
     title.x = bgBigPurpleTitle.x + (bgBigPurpleTitle.width - title.width) / 2 - 20;
     title.y = bgBigPurpleTitle.y + (bgBigPurpleTitle.height - title.height) / 2 + 60;
     app.stage.addChild(title);
     let leftSide = new Text("Все друзья", {
         fontFamily: "Arial",
         fontSize: "17px",
         fill: "#1c1138",
         align: "center",
         fontWeight: "bolder"
     });
     leftSide.x = btnPurpleNormal.x + (btnPurpleNormal.width - leftSide.width) / 2;
     leftSide.y = btnPurpleNormal.y + (btnPurpleNormal.height - leftSide.height) / 2 - 7;
     app.stage.addChild(leftSide);
     let rightSide = new Text("Друзья в приложении", {
         fontFamily: "Arial",
         fontSize: "17px",
         fill: "#1c1138",
         align: "center",
         fontWeight: "bolder"
     });
     rightSide.x = btnPurpleNormalDis.x + (btnPurpleNormalDis.width - rightSide.width) / 2;
     rightSide.y = btnPurpleNormalDis.y + (btnPurpleNormalDis.height - rightSide.height) / 2 - 7;
     app.stage.addChild(rightSide);
     let sendAll = new Text("Отправить всем", {
         fontFamily: "Arial",
         fontSize: "22px",
         fill: "#ffffff",
         align: "center",
         fontWeight: "bolder",
         stroke: "#0a2e15",
         strokeThickness: 3,
         dropShadow: true,
         dropShadowColor: "#0a2e15",
         dropShadowAngle: 3 * Math.PI / 4,
         dropShadowDistance: 2
     });
     sendAll.x = winBtnGreenNorm.x + (winBtnGreenNorm.width - sendAll.width) / 2;
     sendAll.y = winBtnGreenNorm.y + (winBtnGreenNorm.height - sendAll.height) / 2 - 3;
     app.stage.addChild(sendAll);
 }

 function createFriendBox(firstName, url) {
     let ask = new Container();
     let shape = new Sprite(loader.resources["images/image_atlas.json"].textures["friend_board.png"]);
     let frame1 = new Sprite(loader.resources["images/image_atlas.json"].textures["friend_frame.png"]);
     let frame = new Sprite(loader.resources["images/image_atlas.json"].textures["friend_frame_empty.png"]);
     let check = new Sprite(loader.resources["images/image_atlas.json"].textures["checkbox_norm.png"]);
     check.x = shape.width - 45;
     check.y = (shape.height - check.height) / 2 - 2;

     let name = new Text(firstName, {
         fontFamily: "Arial",
         fontSize: "17px",
         fill: "#1c1138",
         align: "center",
         fontWeight: "bolder"
     });
     name.x = (shape.width - name.width) / 2;
     name.y = (shape.height - name.height) / 2 - 2;
     let pictureTexture = PIXI.Texture.from(url);
     let friendPicture = new PIXI.Sprite(pictureTexture);
     friendPicture.width = 40;
     friendPicture.height = 40;
     ask.addChild(shape);
     ask.addChild(frame1);
     ask.addChild(friendPicture);
     ask.addChild(frame);
     ask.addChild(check);
     ask.addChild(name);
     return ask;
 }
 
 function access() {
    VK.callMethod('showAllowMessagesFromCommunityBox', 186264838);
 }

 function listFriends(offset = 0) {
     VK.api("friends.get", { "fields": "photo_50, online", "order": "name", "count": "8", "offset": offset }, function(data) {


         length = data.response.items.length;
         let a = 244;
         let b = 288.5;
         let y = 0;
         let y1 = 0;
         for (let i = 0; i <= length; i++) {
             let row1 = createFriendBox(data.response.items[i].first_name, data.response.items[i].photo_50);

             row1.interactive = true;
             row1.buttonMode = true;
             row1.on('click', function() {
                VK.api("apps.sendRequest", { "user_id": data.response.items[i].id, "text": "Давай играть", "name": "name", "key": data.response.items[i].id }, function(data) {
                     console.log(data);
                 });
                 

               


             });
             if (i < 4) {
                 row1.x = a;
                 row1.y = y + b;
                 y += row1.height + 10;
             }
             if (i > 3) {
                 row1.x = a + 246;
                 row1.y = y1 + b;
                 y1 += row1.height + 10;
             }
             app.stage.addChild(row1);
         }
     });
 };

 function onClick() {
     console.log("Hello my friend");
 };

 function next() {
     getAll();
     let newOffset = schet + 8;
     listFriends(newOffset);
     schet += length;
 };

 function previous() {
     getAll();
     let newOffset = schet - 8;

     if (newOffset < 0) {
         newOffset = 0;
         schet = 0;
     };
     listFriends(newOffset);
     schet -= length;

 };