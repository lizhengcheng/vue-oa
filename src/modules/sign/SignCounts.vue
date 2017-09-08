<template>
  <section class="sign-counts">
    <header>
      <p>{{ dateYear() }}年{{ dateMonth() }}月</p>
    </header>
    <section class="sign-week">
      <div>
        <a href="">上一周</a>
        <a href="">下一周</a>
      </div>
      <div class="sign-info-table">
        <table>
          <thead>
            <tr>
              <th>周一</th>
              <th>周二</th>
              <th>周三</th>
              <th>周四</th>
              <th>周五</th>
              <th>周六</th>
              <th>周日</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in signlist">
              <td> 
                <p class="nub">{{  }}</p>
                <em></em>
                <p>未签</p>
              </td>
              <td>  
                <p class="nub">7</p>
                <em class="red"></em>
                <p>迟到</p>
              </td>
              <td> 
                <p class="nub">8</p>
                <em class="blue"></em>
                <p>出差</p>
              </td>
              <td> 
                <p class="nub">9</p>
                <em class="orange"></em>
                <p>旷工</p>
              </td>
              <td> 
                <p class="nub">10</p>
                <em class="green"></em>
                <p>正常</p>
              </td>
              <td> 
                <p class="nub">11</p>
                <em></em>
                <p>未签</p>
              </td>
              <td> 
                <p class="nub">12</p>
                <em></em>
                <p>未签</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="sign-month">
      <div class="head clearfix">
        <p class="month-look"><span>2017年2月</span></p>
        <div class="take-month" style="overflow:hidden;float:right">
          <select style="border: none;width: 110%">
            <option value="">选择其他月份</option>
            <option value="1">22222</option>
            <option value="2">3333</option>
            <option value="3">4444</option>
          </select>
        </div>
      </div>
      <div class="month-state">
        <table>
          <tbody>
            <tr>
              <td>
                <p><em class="green"></em><span>正常</span></p>
                <p>15次</p>
              </td>
              <td>
                <p><em class="red"></em><span>迟到</span></p>
                <p>15次</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><em class="orange"></em><span>旷工半天</span></p>
                <p>15次</p>
              </td>
              <td>
                <p><em class="orange"></em><span>旷工一天</span></p>
                <p>15次</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><em class="blue"></em><span>请假</span></p>
                <p>15次</p>
              </td>
              <td>
                <p><em class="orange"></em><span>早退</span></p>
                <p>15次</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><em class="green"></em><span>加时</span></p>
                <p>15次</p>
              </td>
              <td>
                <p><em class="blue"></em><span>出差</span></p>
                <p>5天</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><em class="orange"></em><span>调休</span></p>
                <p>4天3小时</p>
              </td>
              <td>
                <p><em></em><span>其他</span></p>
                <p>15次</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><em></em><span>未签</span></p>
                <p>15次</p>
              </td>
              <td>
              </td>
            </tr>
        </tbody>
        </table>
      </div> 
    </section>
  </section>
</template>
<script>
  export default {
    data () {
      return {

      };
    },
    methods: {
      dateYear: function () {
        var today = new Date();
        var year = today.getFullYear();
        return year;
      },
      dateMonth: function () {
        var today = new Date();
        var month = today.getMonth() + 1;
        return month;
      }
    }
  };
</script>