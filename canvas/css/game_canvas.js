function startGame() {
    //hàm startGame() gọi đến phương thức start() của đối tượng myGameArea.
    myGameArea.start();
}
var myGameArea={
    canvas : document.createElement("canvas"),
    start : function () {
        //xác định độ rộng của vùng game
        this.canvas.width=500;
        //xác định chiều cao của vùng game
        this.canvas.height=300;
        //nội dung bên trong của vùng không gian này là các thứ được vẽ từ getContext("2d")
        this.context = this.canvas.getContext("2d");
        //method start() tao ra 1 <canvas> va chèn nó như childNodes của <body>
        document.body.insertBefore(this.canvas,document.body.childNodes[0]);
    }
}
