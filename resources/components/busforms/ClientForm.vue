// TODO Fix the back button redirect method
// TODO Add Edit functionality
// TODO Populate the card with info from the backend
// TODO Make the modal verify it should be closed to avoid losing unsaved changes

<template>
  <div class="client">
    <div class="container-fluid">

        <h1>Elders</h1>

        <div class="button-container mb-3">
          <!-- TODO Is there a better way to make this back button work? Or one consistent with other pages?-->
          <button type="button" :to="redirect" :style="{ display: activeBack }" onclick="history.back()" class="btn btn-primary px-3">Back</button>
          <button type="button" class="btn btn-primary px-3" id="clientEdit" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
        </div>

        <div class="accordion" id="accordionTest">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
              </button>
            </h2>
           <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionTest">
          <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>

        <div class="accordion" id="accordionExample">
          <AccordionList 
            v-show="1" 
            v-for="client in clients"
            :key="client.id"
            :headingId="client.id"
            :collapseId="client.id"
            :name="client.client_name"
            :client_address="client.client_address"
        ></AccordionList>
        </div>

        
        <!-- TODO Update this so that it can be populated with data from the backend-->
        <div class="card text-start border-dark mx-auto w-50" >
          <div class="card-header text-center fw-bold">Name: TMP Carl Wheezer </div>
          <div class="card-body">
            <div class="row">
              <div class="col-4">
                <p class="card-text fw-bold">Address: </p>
                <p class="card-text fw-bold">Phone number:</p>
                <p class="card-text fw-bold">Mobility:</p>
                <p class="card-text fw-bold">Number of cancels:</p>
                <p class="card-text fw-bold">Additional notes:</p>
              </div>
              <div class="col">
                <p class="card-text">TMP 713 Road St Apt 2 </p>
                <p class="card-text">TMP (906) 333-1542</p>
                <p class="card-text">TMP Wheelchair</p>
                <p class="card-text">TMP 2</p>
                <p class="card-text">TMP Is partially deaf</p>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true" >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header text-center">
                <h5 class="modal-title" id="editModalLabel">Edit Client Information</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <!-- TODO Update these to be poulated with data from the backend -->
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Password</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <!--
                <div class="mb-3 row">
                  <label for="name" class="col-sm-2 col-form-label">Name:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control-plaintext border rounded" id="name" value=" TMP Carl Wheezer">
                  </div>
                </div>
                -->
                <div class="mb-3 row">
                  <label for="address" class="col-sm-2 col-form-label">Address:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control-plaintext border rounded" id="address" value=" TMP 713 Road St Apt 2 ">
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="phoneNumber" class="col-sm-2 col-form-label">Phone:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control-plaintext border rounded" id="phoneNumber" value=" TMP (906) 333-1542">
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="mobility" class="col-sm-2 col-form-label">Mobility:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control-plaintext border rounded" id="mobility" value=" TMP Wheelchair">
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="numberOfCancels" class="col-sm-5 col-form-label text-start">Number of Cancels:</label>
                  <div class="col-sm-5">
                    <input type="number" class="border rounded mt-2" id="numberOfCancels" min="0">
                  </div>
                </div>
                <div class="mb-3">
                  <label for="additionalNotes" class="form-label">Additional Notes:</label>
                  <textarea class="form-control border rounded" id="exampleFormControlTextarea1" rows="3">* TMP Is partially deaf</textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import AccordionList from './AccordionList.vue';

export default {
  components: {
    AccordionList
  },
  props: {
    editMode: { type: Boolean, required: false, default: false },
    activeBack: { type: String, required: false, default: "flex" },
    redirect: { type: String, required: true },
  },
  data() {
    return {
      //TODO Remove any un-used items from here
      editing: this.editMode,
      clientName: "",
      title: "",
      driverName: "",
      appDate: "",
      pickupAddress: "",
      dropoffAddress: "",
      clientNotes: "",
      clients: [],
    };
  },
  mounted() {
    this.getClients();
  },
  methods: {
    getClients() {
      this.$axios.get('/api/clients')
        .then((clientsdata) => {
            console.log(clientsdata);
            this.clients = clientsdata.data;
        }).catch((error) => {
            console.log(error)
        })
    },
  },

};
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}


</style>
