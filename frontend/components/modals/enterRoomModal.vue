<template>
<!-- Modal -->
  <div class="modal" id="enterRoomModal">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h1 class="modal-title">진료실 생성</h1>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
             <!-- <label class="col-form-label">환자 선택</label>
             <select id="guest">
                <option :value="0" selected>선택</option>
                <option v-for="(guest, index) in guestList" v-bind:key="index" :value="guest.no">{{guest.name}}</option>
            </select>  -->

            <a
                @click="startRoom"
                class="btn active"
                >진료실 생성</a
            >

        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
export default {
    name: "EnterRoomModal",

    methods: {
        startRoom() {
            
        }
    }
}
</script>

<style scoped>

/* Important part */
.modal{
    z-index: 1049;
}

.modal-dialog{
    overflow-y: initial !important
}
.modal-body{
    height: 80vh;
    overflow-y: auto;
}
</style>