import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, } from '@agm/core';
import { RequestModel } from '../model/requestModel'
import { ProfileService } from '../services/profile.service';
import Swal from 'sweetalert2'
import {RequestMachanicService} from '../services/request-machanic.service'

@Component({
  selector: 'app-request-map',
  templateUrl: './request-map.component.html',
  styleUrls: ['./request-map.component.css']
})
export class RequestMapComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public zoom: number;
  public address: string;
  private geoCoder;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  public profile: any[] = [];

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private Userprofile: ProfileService,
    private makeRequest :RequestMachanicService,
  ) {}


  ngOnInit() {
    this.mapInit();
    this.getUserDetails()
  }


  public mapInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 15;
        });
      });
    });
  }
  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }



  public getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 15;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
  public getUserDetails() {
    this.Userprofile.getUserProfile().subscribe(data => {
      this.profile.push(data)
    }, err => {
      console.log(err);
    })
  }

  public requestMarchanic() {
    const  request : RequestModel = {
      firstName: this.profile[0].firstName,
      lastName: this.profile[0].lastName,
      email: this.profile[0].email,
      phoneNumber: this.profile[0].phoneNumber,
      location: this.address,
    }
    this.makeRequest.requestMachanic(request).subscribe(data =>{
      console.log(data)
      this.alertMessage()
      window.location.reload();
   
    })

    location.reload();
  }
  
  public alertMessage(){
    Swal.fire({
      icon: 'success',
      title: 'Your request is submitted',
    })
  
  }
}




