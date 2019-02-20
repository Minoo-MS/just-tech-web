import React from "react"
import { Parallax } from "react-parallax"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

import landingImg from "../images/landing2.png"
import computer from "../images/blake-connally-373084-unsplash.jpg"
import logo from "../images/logo.png"
import ContactUsForm from "../components/contactusForm"
import PageBreaker from "../components/pageBreaker";
import Upsell from "../components/upsell";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`justtech`, `application`]} />
    <Parallax
      blur={1}
      bgImage={landingImg}
      bgImageAlt="tech"
      strength={400}
    >
      <div className="image-shadow text-center py-32 text-white" >
        <img src={logo} alt="Just logo"/>

        <h1 className="m-0"> Just<b>Tech</b> </h1>

        <p className="m-4">
          Matchar utrikesfödda topptalanger<br/>
          inom IT med arbetsmarknaden
        </p>
        <p className="m-4">
          <b>Start Q1 2019</b>
        </p>

        <div class="m-auto bg-white h-2 w-6"></div>
      </div>
    </Parallax>
    <PageBreaker />

    <Upsell/>

    <Parallax
      bgImage={computer}
      bgImageStyle={{top: "-100%"}}
      bgImageAlt="tech"
      strength={100}
    >
      <div style={{height: "300px"}}/>
    </Parallax>

    <ContactUsForm />
  </Layout>
)

export default IndexPage
