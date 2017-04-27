<template>
<div id="chart_base_vue">

<div class="mainleft">
           <leftmenu :leftMenu="leftMenu" ></leftmenu>
</div>

<div class="mainright">
            <router-view></router-view>
</div>

</div>
	
</template>

<script type="text/ecmascript-6">
  import leftmenu from 'components/page/common/leftmenu'


 export default {
    components: {
      leftmenu
    },
    data(){
      return {
        
        leftMenu: {}
      }
    }
 }
</script>
<style rel="stylesheet/less" lang="less">

.mainleft{
width:330px;
float: left;

            .ui.vertical.menu{
               padding-bottom:100%;
                
                width:330px;
                background-color:#34495e;
            }

}

.mainright{
margin-left:330px;
padding-left:38px;
padding-top:34px;
}

#tabledata{
margin-top:0;

}

#tabledata thead{
          font-size : 14px;
          background-color:#fdfcdb;
          color     : #292626;
}


#tabledata tbody{
        font-size:16px;
        color:#666666;

}

#tabledata tbody a{
        color:#1e62c9;

}


.ui.small.menu.grey{
        height:40px;
	.ui.primary.button{
		width:70px;
		height:38px;
		background-color:#527493;
	}
}









.myselect {
    //border: solid 5px #0e0;
    width: 100%;
    height: 80px;
    //margin-bottom:48px;
.mytext{
  width:100%;
  padding-bottom:22px;

 .regiontext{
        font-size:18px;
        color:#292626;
        width:560px;

 }
 .datetext{
        font-size:18px;
        color:#292626;
 }

}


.mysecond{
height:40px;
padding-left:13px;
.myregion {
   font-size:16px;
   color:#292626;
   min-width: 70px ;
    border-style: solid;
    border-color: #dadadd;
    border-width: 1px;
    line-height:40px;
    i.dropdown.icon{
        //float:right;
        //padding-left:42px;
        //line-height:40px;
    }
}

.mysearch {

    width: 296px ;
    border-style: solid;
    border-color: #dadadd;
    border-width: 1px;
    line-height:40px;

::-webkit-input-placeholder {
  color:#dadadd;
  font-size:14px;
}
::-moz-placeholder {
  color:#dadadd;
  font-size:14px;
}
:-ms-input-placeholder {
  color:#dadadd;
  font-size:14px;

}


    .ui.transparent.icon.input{
        width:270px;
    }
}
.myexport{
        padding:0;
        padding-left:24px;
        padding-right:66px;
        .ui.primary.button{
                width:70px;
                height:38px;
                background-color:#527493;
                line-height:16px;
                font-size:14px;

        }
        //width:70px;
        //font-size:4px;
}
.mydate{

//      width:400px;
}

}
}

#alltable{
margin-top:48px;

thead{
	
	tr{
	
		th{
		  background-color:#fdfcdb;
			font-weight: normal;
		}
	}
}

}
</style>