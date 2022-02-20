<script>
export default {
  data() {
    return {
      fields: ['time','driver','client_details'],
      items: [
        {
          time: '3:45',
          driver: 'Driver1',
          client: 'Edna',
          home_addr: '7 Road st',
          dest_addr: 'bigWorm Avenue',
          mobility: 'Wheelchair',
          notes: 'Deaf, need to wave through the front window'
        },
        {
          time: '4:15',
          driver: 'Driver2',
          client: 'Edith',
          home_addr: '9 Road st',
          dest_addr: 'Lost Avenue',
          mobility: 'NA',
          notes: 'Likes chocolate'
        },
        {
          time: '4:30',
          driver: '',
          client: 'Bruce' ,
          home_addr: '8 Avenue st',
          dest_addr: 'Walmart',
          mobility: 'Walker',
          notes: 'Favorite color is red'
        },
        {
          time: '5:15',
          driver: 'Driver2',
          client: 'Edith',
          home_addr: '9 Road st',
          dest_addr: '9 Road st',
          mobility: 'NA',
          notes: 'Likes chocolate'
        },
        {
          time: '5:30',
          driver: '',
          client: 'Bruce' ,
          home_addr: '8 Avenue st',
          dest_addr: '8 Avenue st',
          mobility: 'Walker',
          notes: 'Favorite color is red'
        },
        {
          time: '6:00',
          driver: 'Driver1',
          client: 'Wilma',
          home_addr: 'Spooky Rd',
          dest_addr: 'McDonalds',
          mobility: 'NA',
          notes: ''
        },
        {
          time: '6:30',
          driver: 'Driver1',
          client: 'Wilma' ,
          home_addr: 'Spooky Rd',
          dest_addr: 'Spooky Rd',
          mobility: 'NA',
          notes: ''
        },
      ],
    };
  },
  methods: {
    rowClass(item, type) {
      if (item.driver == null) return 'green'
      if (!item || type != 'row') return
    }
  }
};
</script>

<template>
  <div>
    <h1>Calendar</h1>

    <table class="table drivetbl">
    <!-- <b-table class="drivetbl" selectable @select="selected" hover sticky-header responsive="sm"
    :items="items" :fields="fields" :tbody-tr-class="rowClass"> -->
      <template >
        <button type="button" class="btn btn-link btn-sm">
          <!-- {{row.item.time}} -->
        </button>
      <!-- <b-button variant="link" href="./update" size="sm" class="mr-2">
        {{row.item.time}}
      </b-button> -->
      </template>

      <template >
        <button type="button" class="btn btn-link btn-sm mr-2">
          <!-- {{row.item.client}} -->
        </button>
      <!-- <b-button variant="link" size="sm" @click="row.toggleDetails" class="mr-2">

      </b-button> -->
      </template>
      <template >
          <div class="card justify-center">
        <!-- <b-card
          class="justify-center"
        > -->
          <div class="row mb-2">
          <!-- <b-row class="mb-2"> -->
          <div class="col-sm-12 text-sm-right">
            <!-- <b-col sm="3" class="text-sm-right"> -->
              <b>Home Address:</b>
              <!-- {{row.item.home_addr}} -->
            <!-- </b-col> -->
          </div>
          <!-- </b-row> -->
        </div>

          <div class="row mb-2">
          <!-- <b-row class="mb-2"> -->
          <div class="col-sm-12 text-sm-right">
            <!-- <b-col sm="3" class="text-sm-right"> -->
              <b>Destination Address:</b>
              <!-- {{row.item.dest_addr}} -->
            <!-- </b-col> -->
          </div>
          <!-- </b-row> -->
        </div>

        <div class="row mb-2">
          <!-- <b-row class="mb-2"> -->
          <div class="col-sm-12 text-sm-right">
            <!-- <b-col sm="3" class="text-sm-right"> -->
              <b>Mobility:</b>
              <!-- {{row.item.mobility}} -->
            <!-- </b-col> -->
          <!-- </b-row> -->
        </div>
        </div>

        <div class="row mb-2">
          <!-- <b-row class="mb-2"> -->
          <div class="col-sm-12 text-sm-right">
            <!-- <b-col sm="3" class="text-sm-right"> -->
              <b>Notes:</b>
              <!-- {{row.item.notes}} -->
            <!-- </b-col> -->
          </div>
          <!-- </b-row> -->
        </div>
        <!-- </b-card> -->
      </div>
      </template>
    <!-- </b-table> -->
  </table>
  <router-link tag="button" to="/driver"  class="btn btn-secondary btn-lg" >Back</router-link>
    <!-- <b-button href="#" to="/driver" variant="primary">Back</b-button> -->
  </div>
</template>

<style lang="scss" scoped>
table thead th {
  background-color: #a9a9a9;
}
h1 {
  margin-top: 16px !important;
}
.drivetbl {
  height: calc(100vh - 245px);
  max-height: unset;
}
.drivetbl table {
  margin-top: 0;
}
</style>
