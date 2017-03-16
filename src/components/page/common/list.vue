<template>
  <div class="list-wrapper" >

    <div class="panel panel-default">
      <!-- Default panel contents -->
      <div class="panel-heading">
        <listTitle>
          <h4>{{title}}</h4>
        </listTitle>

      </div>
      <loading :loadingShow="loadingShow"></loading>
      <div v-show="!loadingShow" class="table-responsive">
        <table class="table table-hover table-striped">
          <thead v-if="grids" class="">
          <tr>
            <th v-for=" item in grids" :class="item.field">{{item.title}}</th>
          </tr>
          </thead>
          <tbody>

          <tr v-for="item in items">
            <td v-for="grid in grids">
              {{item[grid.field]}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--{{grids|json}}-->
  </div>
</template>
<script type="text/ecmascript-6">
  import loading from 'components/common/loading'
  import listTitle from 'components/common/listTitle'
  import tool from 'src/util/Store';
  const RS_OK = 1
  export default{
    data(){
      return {
        path: '',
        grids: [],
        items: [],
        loadingShow: true
      }
    },
    methods: {
      logout(){
        this.$parent.user = {}
      },
      getData(){
        let url = tool.getUrl(this.ctl, 'vdata')
        this.$http.get(url, {is_vue: 1}).then((rs) => {
          let obj = rs.data
          if (obj.status == RS_OK) {
            this.items = obj.data
            this.getGrid()
          }
        })
      },
      getGrid(){
        let url = tool.getUrl(this.ctl, 'grid')
        this.$http.get(url).then((rs) => {
          let obj = rs.data
          if (obj.status == RS_OK) {
            this.grids = obj.data
            this.loadingShow = false
          }
        })
      }
    },
    watch: {
      ctl: function (val, old) {
        tool.cl(val, old)
        if (val != old) {
          this.loadingShow = true
          this.getData()

        }
      }
    },
    computed: {
      ctl(){
        return this.$route.query.ctl;
      },
      hlitems(){
//        let data=[]
//        this.items.forEach((item)=>{
//          let line=[]
//          this.grids.forEach((grids)=>{
//            let field=grid.field
//            let val=item[field]
//            line.push(val)
//          })
//          data.push(line)
//        })
//        this.items=data
      },
      title(){
        return this.$route.query.title || this.defTitle;
      }
    },
    components: {
      loading,
      listTitle
    },
    props: ['menus', 'user',  'defTitle'],
    created(){
      this.path = this.$route.path
      this.getData();
//      this.getGrid();
//      console.log(this.$root)
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  @import "../../common/style/mixin";
  @dir: "common/";

  .list-wrapper {
    .panel{
      margin-bottom:10px;
    }
    .table {

      tr{
        td, th {
          white-space: nowrap;
          &:first-child{
            padding-left:10px;
          }
          &:last-child{
            padding-right:10px;
          }
        }
      }

    }
  }
</style>
