<template>
  <div class="home">
    <Navbar></Navbar>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <div>
                <label for="input-city" class="mb-2">Search a city</label>
                <input id="input-city" type="text" class="form-control" placeholder="New York, Dubai, Madrid, CDMX">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <h6>Icon</h6>
          <h6>Weather</h6>
          <h6>City name</h6>
        </div>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/includes/Navbar";
import Footer from "@/components/includes/Footer";

export default {
  name: 'Home',
  components: {
    Footer,
    Navbar
  }
}
</script>
