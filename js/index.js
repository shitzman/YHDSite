


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


        caseDivIsShow:false,


        linkUsIsShow:false,
        updateMessageIsShow:false,

        fzjhIsShow:false,
        bqzlIsShow:true,


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
          this.fzjhIsShow=false;
          this.bqzlIsShow=false;
          
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
        },
        changefzjhIsShow:function(){
            this.allFalse();
            this.fzjhIsShow=true;
        },
        changebqzlIsShow:function(){
            this.allFalse();
            this.bqzlIsShow=true;
        }
    }
})


$("ul#shi-j").on("click","li",function(){      
    
    $(this).addClass("active").siblings().removeClass("active");
    // $(this).siblings().children().siblings().children().removeClass("shi-active");
    $(this).siblings().find("li").removeClass("shi-active");
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


$(document).ready(function(){

/* 客户案例Echarts Map配置*/ 

var dataList=[ 
    {name: '河北', value:'11'},
    {name: '河南', value: '4'},
    {name:'辽宁',value:'16'},
    {name:'山西',value:'4'},
    {name:'江西',value:'2'},
    {name:'内蒙古',value:'1'},
    {name:'山东',value:'1'},

    {name:"南海诸岛",value:'0'},
    {name: '北京', value: '0'},
    {name: '天津', value: '0'},
    {name: '上海', value: '0'},
    {name: '重庆', value: '0'},
    {name: '云南', value: '0'},
    {name: '黑龙江', value: '0'},
    {name: '湖南', value: '0'},
    {name: '安徽', value: '0'},
    {name: '新疆', value: '0'},
    {name: '江苏', value: '0'},
    {name: '浙江', value: '0'},
    {name: '湖北', value: '0'},
    {name: '广西', value: '0'},
    {name: '甘肃', value: '0'},
    {name: '陕西', value: '0'},
    {name: '吉林', value: '0'},
    {name: '福建', value: '0'},
    {name: '贵州', value: '0'},
    {name: '广东', value: '0'},
    {name: '青海', value: '0'},
    {name: '西藏', value: '0'},
    {name: '四川', value: '0'},
    {name: '宁夏', value: '0'},
    {name: '海南', value: '0'},
    {name: '台湾', value: '0'},
    {name: '香港', value: '0'},
    {name: '澳门', value: '0'}
];
var chart = echarts.init(document.getElementById('caseMap'));
chart.setOption({
tooltip: {
            formatter:function(params,ticket, callback){
                return params.seriesName+'<br />'+params.name+'：'+params.value
            }//数据格式化
        },
    visualMap: {
        min: 0,
        max: 20,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],//取值范围的文字
        inRange: {
            color: ['#FAF0E6', '#006400']//取值范围的颜色
        },
        show:true//图注
    },
    geo: {
        map: 'china',
        roam: false,//不开启缩放和平移
        zoom:1.23,//视角缩放比例
        label: {
            normal: {
                show: true,
                fontSize:'14',
                color: 'rgba(0,0,0,0.7)'
            }
        },
        itemStyle: {
            normal:{
                borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis:{
                areaColor: '#F3B329',//鼠标选择区域颜色
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    series : [
        {
            name: '客户数量',
            type: 'map',
            geoIndex: 0,
            data:dataList
        }
    ]
});


})
