class Draw{
    constructor(cobj,option){
        this.cobj=cobj;
        this.color=option.color;
        this.width=option.width;
        this.style=option.style;
    }
    init(){
        this.cobj.fillStyle=this.color;
        this.cobj.strokeStyle=this.color;
        this.cobj.lineWidth=this.width;
    }
    rect(ox,oy,mx,my){
        this.init()
        // this.cobj.strokeRect(ox,oy,mx - ox, my - oy);
        this.cobj.beginPath()
        this.cobj.rect(ox,oy,mx - ox, my - oy)
        this.cobj[this.style]()
    }
    line(ox,oy,mx,my){
        this.init()
        this.cobj.save()
        this.cobj.beginPath()
        this.cobj.moveTo(ox,oy)
        this.cobj.lineTo(mx,my)
        this.cobj.stroke()
        this.cobj.restore()
    }
    circlein(ox,oy,mx,my){
        this.init()
        this.cobj.save()
        this.cobj.beginPath();
        var r=Math.abs(mx-ox)>Math.abs(my-oy)?Math.abs(my-oy)/2:Math.abs(mx-ox)/2;
        this.cobj.arc(ox+(mx>ox?r:-r),oy+(my>oy?r:-r),r,0,2*Math.PI)
        this.cobj[this.style]()
        this.cobj.restore()
}
    circleout(ox,oy,mx,my) {
        this.init()
        this.cobj.save()
        this.cobj.beginPath();
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2
        this.cobj.arc(ox+(mx-ox)/2,oy+(my-oy)/2,r,0,2*Math.PI)
        this.cobj[this.style]()
        this.cobj.restore()
    }
    circlecen(ox,oy,mx,my){
        this.init()
        this.cobj.save()
        this.cobj.beginPath();
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
        this.cobj.arc(ox,oy,r,0,2*Math.PI)
        this.cobj[this.style]()
        this.cobj.restore()
    }
    poly(ox,oy,mx,my,s){
        this.init()
        this.cobj.save()
        this.cobj.translate(ox,oy)
        this.cobj.rotate(Math.PI/2)
        var angle=Math.PI/s;
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))
        var x=Math.cos(angle)*r;
        var y=Math.sin(angle)*r;
        this.cobj.beginPath()
        this.cobj.moveTo(x,y)
        for(var i=0;i<s;i++){
            this.cobj.lineTo(x,-y)
            this.cobj.rotate(-angle*2)
        }
        this.cobj[this.style]()
        this.cobj.restore()
    }
    pen(ox,oy,mx,my){
        this.init();
        this.cobj.lineTo(mx,my);
        this.cobj.stroke()
        this.cobj.restore()
    }
    eraser(ox,oy,mx,my){
        this.cobj.clearRect(mx,my,8,8)
    }
}