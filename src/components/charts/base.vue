<template>
<div id="chart_base_vue">

<div class="mainleft  col-sm-2 col-md-2">
           <leftmenu :leftMenu="leftMenu" ></leftmenu>
</div>

<div class="mainright col-sm-10 col-md-10">
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
.sjtext {
    width:8%;
    line-height: 38px;
    font-size: 16px;
}

.xzcstext{
   width:10%;
    line-height: 38px;
    font-size: 16px;
}
.mainleft{
//width:100%;
//float: left;
padding:0px;

            .ui.vertical.menu{
                padding-bottom:100%;
                top:0px;
                width:100%;
                background-color:#34495e;
            }

}

.mainright{
//margin-left:280px;
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
        width:550px;

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
  width: 9%;
   font-size:16px;
   color:#292626;
    //width: 8% ;
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

    width: 18% ;
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
        width:100%;
    }
}
.myexport{
	width:10%;
        padding:0;
        padding-left:24px;
        padding-right:66px;
        .myexbutton{
border-radius: 2px;    
    width: 70px;
    height: 38px;
    background-color: #527493;
    
    font-size: 14px;
    color: white;
    line-height: 40px;
    text-align: center;

        }
        //width:70px;
        //font-size:4px;
}
.mydate{
     padding:0px;
      width:45%;
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


.mysecond.ui.column.grid {
    width: 100%;
}
</style>