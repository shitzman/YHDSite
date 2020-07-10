var showDiv = new Vue({
    el: "#vue-divs",
    data: {

        homeDivIsShow:false,
        divIsShow1: false,
        divIsShow2: false,
        divIsShow3: false,
        divIsShow4: false,
        divIsShow5: false,
        divIsShow6: false,
        divIsShow7: false,
        divIsShow8: false,
        divIsShow9: false,


        listIcon1: true,
        listIcon2: true,
        listIcon3: true,

        aboutDivIsShow1:false,
        aboutDivIsShow2:false,
        aboutDivIsShow3:false,


        caseDivIsShow:true,


        linkUsIsShow:false,
        updateMessageIsShow:false,


        // imgUrl:'url(../img/bgimg6.jpg)',
    },
    methods: {
        allFalse:function(){
          this.homeDivIsShow=false;
          this.divIsShow1=false;
          this.divIsShow2=false;
          this.divIsShow3=false;
          this.divIsShow4=false;
          this.divIsShow5=false;
          this.divIsShow6=false;
          this.divIsShow7=false;
          this.divIsShow8=false;
          this.divIsShow9=false;
          this.aboutDivIsShow1=false;
          this.aboutDivIsShow2=false;
          this.aboutDivIsShow3=false;
          this.linkUsIsShow=false;
          this.updateMessageIsShow=false;
          this.caseDivIsShow=false;
          
        },
        changeIsShow1: function () {
            this.allFalse();
            this.divIsShow1 = true;
            
            // this.imgUrl = 'url(../img/bgimg4.jpg)';
        },
        changeIsShow2: function () {
           
            this.allFalse();
            this.divIsShow2 = !this.divIsShow2;
            
            // this.imgUrl = 'url(../img/bgimg4.jpg)';
        },
        changeIsShow3: function () {
            this.allFalse();
            this.divIsShow3 = !this.divIsShow3;

            // this.imgUrl = 'url(../img/bgimg4.jpg)';
        },
        changeIsShow4: function () {
            this.allFalse();
            this.divIsShow4 = !this.divIsShow4;

            // this.imgUrl = 'url(../img/bgimg4.jpg)';
        },
        changeIsShow5: function () {
            this.allFalse();
            this.divIsShow5 = !this.divIsShow5;

            // this.imgUrl = 'url(../img/bgimg4.jpg)';
        },
        changeIsShow6: function () {
            this.allFalse();
            this.divIsShow6 = !this.divIsShow6;

            // this.imgUrl = 'url(../img/bgimg4.jpg)';
        },
        changeIsShow7: function () {
            this.allFalse();
            this.divIsShow7 = !this.divIsShow7;
        },
        changeIsShow8: function () {
            this.allFalse();
            this.divIsShow8 = !this.divIsShow8;
        },
        changeIsShow9: function () {
            this.allFalse();
            this.divIsShow9 = !this.divIsShow9;
        },

        changeAboutDivIsShow1:function(){
            this.allFalse();
            this.aboutDivIsShow1=true;
            // this.imgUrl = 'url(../img/bgimg1.jpg)';
        },
        changeAboutDivIsShow2:function(){
            this.allFalse();
            this.aboutDivIsShow2=true;
            // this.imgUrl = 'url(../img/bgimg1.jpg)';
        },
        changeAboutDivIsShow3:function(){
            this.allFalse();
            this.aboutDivIsShow3=true;
            // this.imgUrl = 'url(../img/bgimg1.jpg)';
        },

        caseDiv:function(){
            this.allFalse();
            this.caseDivIsShow=true;
            
        },

        changeListIcon1: function () {
            this.listIcon1 = !this.listIcon1;
        },
        changeListIcon2: function () {
            this.listIcon2 = !this.listIcon2;
        },
        changeListIcon3: function () {
            this.listIcon3 = !this.listIcon3;
        },
        home:function(){
            this.allFalse();
            // this.imgUrl = 'url(../img/bgimg6.jpg)';
            this.homeDivIsShow=!this.homeDivIsShow;
            
        },
        linkUs:function(){
            this.allFalse();
            this.linkUsIsShow=true;
            // this.imgUrl = 'url(../img/bgimg6.jpg)';
        },
        updateMessage:function(){
            this.allFalse();
            this.updateMessageIsShow=true;
        }
    }
})


$("ul#shi-j").on("click","li",function(){      
    
    $(this).addClass("active").siblings().removeClass("active");
    
});



// $("#shi-j>li>ul ").on("click","li",function(){      
    
//     $(this).addClass("shi-active").siblings().removeClass("shi-active");
// });

$("ul#list2 ").on("click","li",function(){      
    
    $(this).addClass("shi-active").siblings().removeClass("shi-active");
    $("#list1>li").removeClass("shi-active");
    $("#list3>li").removeClass("shi-active");
});

$("ul#list1 ").on("click","li",function(){      
    
    $(this).addClass("shi-active").siblings().removeClass("shi-active");
    $("#list2>li").removeClass("shi-active");
    $("#list3>li").removeClass("shi-active");
});

$("ul#list3 ").on("click","li",function(){      
    
    $(this).addClass("shi-active").siblings().removeClass("shi-active");
    $("#list1>li").removeClass("shi-active");
    $("#list2>li").removeClass("shi-active");
});

