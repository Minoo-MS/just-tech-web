import React from "react"
import "./contactus.css"

const ContactusForm = () => ( 
<div className="grid">
 <div className="flex flex-wrap lg:p-10 md:p-8 p-2 bg-grey pt-10 py-3">
    <div className="lg:w-1/2 w-full lg:pl-20 lg:pr-20 px-4 py-3">
      <div className="text-white">
      <p>Vi tillhandahåller topptalang inom mjukvaruutveckling </p>
      <ul>
          <li> Front End </li>
          <li> Backend </li>
          <li> Full Stack </li>
      </ul>
      <p> För mer information kontakta Andreas König:</p>
      <p><a href="mailto:andreas@justarrived.se">andreas@justarrived.se</a> 0733-86 86 56</p>
      </div>
    </div>
    <div className="lg:w-1/2 w-full lg:pl-20 lg:pr-20 pl-2 pr-2">
      <form>
        <div className="flex flex-wrap justify-end">
          <div className="lg:w-1/2 md:w-1/2 w-full"> 
            <div className="sixteen wide column single-input-container">
              <div className="p-2">
                <input className="shadow appearance-none border rounded w-full py-2 lg:px-3 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline bg-grey focus:bg-white" type="text" placeholder="Namn" />
              </div>
              <div className="p-2">
                <input className="shadow appearance-none border rounded w-full py-2 lg:px-3 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline bg-grey focus:bg-white" type="text" placeholder="Foretag" />
              </div>
              <div className="p-2">
                <input className="shadow appearance-none border rounded w-full py-2 lg:px-3 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline bg-grey focus:bg-white" type="text" placeholder="Epost" />
              </div>
              <div className="p-2">
                <input className="shadow appearance-none border rounded w-full py-2 lg:px-3 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline bg-grey focus:bg-white" type="text" placeholder="Telefonnummer" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full"> 
              <div className="p-2 h-full">
                <textarea 
                  className="shadow appearance-none border rounded w-full py-2 lg:px-3 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-full bg-grey focus:bg-white"
                  type="text" value="" name="description" id="mce-DESCRIPTION" required placeholder="What do you need help with?"></textarea>
            </div>
          </div>
          <div className="w-20 p-2"> 
            <button className="shadow appearance-none border rounded w-full py-2 lg:px-3 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline">Skicka</button>
          </div>
        </div>
    </form>
</div>
</div>
</div>
)

export default ContactusForm
