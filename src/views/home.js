import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Shallow Insidious Quail</title>
        <meta property="og:title" content="Shallow Insidious Quail" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">Features</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">Pricing</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Testimonials</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Rent a profile</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Option</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">Page Four Description</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name"
        logoSrc="/untitled-1500h.png"
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Rent a profile</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text115">
              Unlock the power of authentic LinkedIn accounts for your lead
              generation and outreach strategies. Our ID-verified accounts
              ensure security and reliability for your business.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Get ID-Verified LinkedIn Accounts for Your Outreach Needs
            </span>
          </Fragment>
        }
        image10Src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGxpbmtlZGlufGVufDB8fHx8MTc1NzA1MjE3N3ww&amp;ixlib=rb-4.1.0&amp;w=1500"
        image11Src="https://images.unsplash.com/photo-1592093506632-92ef342e2591?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGxpbmtlZGlufGVufDB8fHx8MTc1NzA1MjE3N3ww&amp;ixlib=rb-4.1.0&amp;w=1500"
        image1Src="https://images.unsplash.com/photo-1616587224026-668840f26916?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxsaW5rZWRpbnxlbnwwfHx8fDE3NTcwNTIxNzd8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image2Src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQyfHxsaW5rZWRpbnxlbnwwfHx8fDE3NTcwNTIyMTN8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image3Src="https://images.unsplash.com/photo-1592093947163-51f1d258d110?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxsaW5rZWRpbnxlbnwwfHx8fDE3NTcwNTIxNzd8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image4Src="https://images.unsplash.com/photo-1585288766827-c62e98d70191?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGxpbmtlZGlufGVufDB8fHx8MTc1NzA1MjE3N3ww&amp;ixlib=rb-4.1.0&amp;w=1500"
        image5Src="https://images.unsplash.com/photo-1616587656977-ac36a5a430bc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxsaW5rZWRpbnxlbnwwfHx8fDE3NTcwNTIxNzd8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image7Src="https://images.unsplash.com/photo-1683201681334-f25eb7658958?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMyfHxsaW5rZWRpbnxlbnwwfHx8fDE3NTcwNTIyMTN8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image8Src="https://images.unsplash.com/photo-1651235732694-0d057ace2f30?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGF1dGhlbnRpY2F0aW9ufGVufDB8fHx8MTc1NzA1MjQ3NHww&amp;ixlib=rb-4.1.0&amp;w=1500"
        image9Src="https://images.unsplash.com/photo-1615130104765-c140bd3c2c45?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxhdXRoZW50aWNhdGlvbnxlbnwwfHx8fDE3NTcwNTI0NzR8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text117">Account Security</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text118">Fast Delivery</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Dedicated Support</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text120">
              Get ID-verified LinkedIn accounts for enhanced security
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text121">
              Fast delivery of LinkedIn accounts
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text122">
              24/7 dedicated customer support
            </span>
          </Fragment>
        }
        feature1ImgSrc="/unsplash-image-1400w.jpeg"
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text123">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text124">
              Unlock the power of outreach and lead generation with our secure
              and verified LinkedIn accounts.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text125">
              Get Your ID-Verified LinkedIn Account Today
            </span>
          </Fragment>
        }
      ></CTA26>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text126">Basic Plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text127">Standard Plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text128">Premium Plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text129">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text130">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text131">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text132">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text133">
              Monthly Rental  Pricing (per profile)
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text134">
              Choose the plan that suits your needs best
            </span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text135">$29/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text136">$49/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text137">$79/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text138">Buy Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text139">$29</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text140">$290/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text141">Buy Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text142">$49</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text143">$490/year</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text144">Buy Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text145">$79</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text146">$790/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text148">$290</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text149">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text150">$490</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text151">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text152">$790</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text153">ID-verified LinkedIn account</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text154">Fast delivery within 24 hours</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text155">Dedicated customer support</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text156">
              2 ID-verified LinkedIn accounts
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text157">
              Express delivery within 12 hours
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text158">Priority customer support</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text159">
              Advanced automation tool compatibility
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text160">
              5 ID-verified LinkedIn accounts
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text161">
              Super-fast delivery within 6 hours
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text162">
              VIP customer support with dedicated account manager
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text163">
              Full automation tool integration and customization
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">
              + Bonus: Exclusive lead generation training webinar
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text165">
              Compatibility with automation tools
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text166">Secure account setup</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text167">24/7 support</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text168">Enhanced account security</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text169">Personal account manager</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text170">Customized outreach strategy</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text172">
              + Priority access to new features and updates
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text173">
              + Tailored lead generation strategies for your business niche
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text174">
              + Quarterly performance review and optimization sessions
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text177">Choose Your Plan</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text178">Complete Verification</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text179">Fast Delivery</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text180">Start Connecting</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text181">
              Select the plan that best fits your needs for LinkedIn outreach
              and lead generation.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text182">
              Provide necessary information for ID verification to ensure
              account security.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text183">
              Receive your ID-verified LinkedIn account promptly after
              verification.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text184">
              Begin using your LinkedIn account for outreach and generating
              leads with confidence.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text185">
              I was impressed by the quality and security of the LinkedIn
              account I purchased. It has been instrumental in expanding my
              network and generating leads for my business.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text186">
              The fast delivery and excellent customer support made my
              experience seamless. I highly recommend this service for anyone
              looking to enhance their outreach efforts.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text187">
              I have tried other similar services before, but none have matched
              the level of compatibility with automation tools that this
              platform offers. It has saved me valuable time and effort.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text188">
              The ID-verified LinkedIn account I purchased exceeded my
              expectations. The dedicated support team was always available to
              assist me whenever I had questions or needed help.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text189">
              See what our customers have to say about their experience with our
              ID-verified LinkedIn accounts.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text190">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text191">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text192">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text193">Michael Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text194">Sarah Lee</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195">CEO, Company ABC</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text196">Marketing Manager, Company XYZ</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text197">Sales Director, Company 123</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">Freelancer</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text199">
              Wherever your outreach takes you, LinkProvider ensures reliable
              service and support. From Europe to North America, we’ve got you
              covered.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text200">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text201">New York</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text202">Maiami</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text203">
              Supporting global outreach from the heart of New York, delivering
              secure LinkedIn accounts with speed and reliability.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text204">
              Our Miami hub connects businesses with dedicated support and fast
              account delivery for North and South America.
            </span>
          </Fragment>
        }
        location1ImageSrc="https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fE5ldyUyMHlvcmt8ZW58MHx8fHwxNzU3MDUzMTQxfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        location2ImageSrc="https://images.unsplash.com/photo-1557446772-bea6e6bf56eb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxNYWlhbWl8ZW58MHx8fHwxNzU3MDUzMTY3fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
      ></Contact10>
      <img src="/untitled-1500h.png" alt="image" className="home-image" />
      <Footer4
        link1={
          <Fragment>
            <span className="home-text205">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text206">Features</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text207">Pricing</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text208">Testimonials</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text209">Contact</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text210">/terms</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text211">/cookies</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text212">/privacy</span>
          </Fragment>
        }
        logoSrc="https://images.unsplash.com/photo-1627064719444-1985feb93f54?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1OXx8bG9nb3xlbnwwfHx8fDE3NTcwNTAyMTF8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
      ></Footer4>
    </div>
  )
}

export default Home
