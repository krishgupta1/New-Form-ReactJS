import { useState } from "react";
import "./App.css";


function App() {
   
   const {formData, setFormData} = useState({
    firstName:"", lastName:"", email:"", country:"", streetAddress:"", city:"", state:"", zipCode:"", comments:"", candidates:false, offers:false , pushNotification:""  , 
  })
  function changeHandler(event) {
    const {name , value, checked, type} = event.target;
    setFormData ((prev) => ({...prev, [name]:type==="checkbox" ? checked: value}));
  }
  return (
    <div class="w-full md:max-w-[50%] mx-auto shadow p-8">
      <form action="">
        <label class="text-sm font-medium leading-6 text-gray-900">
          First Name
        </label>
        <br />
        <input
          class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          type="text"
          name="name"
          /* value={formData.firstName}
          onChange={changeHandler} */
          placeholder="Pranay"
        />
        <br />
        <label class="text-sm font-medium leading-6 text-gray-900">
          Last Name
        </label>
        <br />

        <input
          class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          type="text"
          name="name"
          placeholder="Gupta"
        />
        <br />

        <label class="text-sm font-medium leading-6 text-gray-900">
          Email Address
        </label>
        <br />

        <input
          class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          type="email"
          name="email"
          placeholder="pgupta@duck.com"
        />
        <label class="text-sm font-medium leading-6 text-gray-900" className="">
          Country
        </label>
        <br />

        <select class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400">
          <option value="">India</option>
          <option value="">United State</option>
          <option value="">Canada</option>
          <option value="">Mexico</option>
        </select>
        <br />
        <label class="text-sm font-medium leading-6 text-gray-900">
          Street Address
        </label>
        <br />

        <input
          class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          type="text"
          name="address"
          placeholder="1234 Main St"
        />
        <label class="text-sm font-medium leading-6 text-gray-900">City</label>
        <br />

        <input
          class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          type="text"
          name="city"
          placeholder="Delhi"
        />
        <label class="text-sm font-medium leading-6 text-gray-900">
          State / Province
        </label>
        <br />

        <input
          class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          type="text"
          name="state"
          placeholder="West Bengal"
        />
        <br />
        <label class="text-sm font-medium leading-6 text-gray-900">
          ZIP / Postal Code
        </label>
        <br />
        <input
          class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          type="text"
          placeholder="713301"
        />
        <br/>
        <br/>
        <div>
          <div class="text-sm font-semibold leading-6 text-gray-900">
            By Email
          </div>
          <div class="mt-4 space-y-2">
            <div class="flex">
              <div class="flex h-6 items-center">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  class="h-4 w-4 rounded"
                  value=""
                />
              </div>
              <div class="ml-3 text-sm leading-6">
                <label for="comments" class="font-medium text-gray-900">
                  Comments
                </label>
                <p class="text-gray-500">
                  Get notified when someones posts a comment on a posting.
                </p>
              </div>
            </div>
            <div class="flex">
              <div class="flex h-6 items-center">
                <input
                  id="candidates"
                  name="candidates"
                  type="checkbox"
                  class="h-4 w-4 rounded"
                  value=""
                />
              </div>
              <div class="ml-3 text-sm leading-6">
                <label for="candidates" class="font-medium text-gray-900">
                  Candidates
                </label>
                <p class="text-gray-500">
                  Get notified when a candidate applies for a job.
                </p>
              </div>
            </div>
            <div class="flex">
              <div class="flex h-6 items-center">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  class="h-4 w-4 rounded"
                  value=""
                />
              </div>
              <div class="ml-3 text-sm leading-6">
                <label for="offers" class="font-medium text-gray-900">
                  Offers
                </label>
                <p class="text-gray-500">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* New Element */}
        <div>
          <div class="contents text-sm font-semibold leading-6 text-gray-900">
            Push Notifications
          </div>
          <p class="text-sm text-gray-500">
            These are delivered via SMS to your mobile phone.
          </p>
          <div class="mt-4 space-y-2">
            <div class="flex items-center">
              <input
                id="pushEverything"
                name="pushNotifications"
                type="radio"
                class="h-4 w-4"
                value="Everything"
              />
              <label
                for="pushEverything"
                class="ml-3 text-sm font-medium leading-6 text-gray-900"
              >
                Everything
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="pushEmail"
                name="pushNotifications"
                type="radio"
                class="h-4 w-4"
                value="Same as email"
              />
              <label
                for="pushEmail"
                class="ml-3 text-sm font-medium leading-6 text-gray-900"
              >
                Same as email
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="pushNothing"
                name="pushNotifications"
                type="radio"
                class="h-4 w-4"
                value="No push notifications"
              />
              <label
                for="pushNothing"
                class="ml-3 text-sm font-medium leading-6 text-gray-900"
              >
                No push notifications
              </label>
            </div>
          </div>
        </div>
        <div className="my-3">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
        </div>
      </form>
    </div>
  );
}

export default App;
 