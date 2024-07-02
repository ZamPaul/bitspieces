import React from 'react'
import { definitions, Acknowledgments, LinkstoOtherWebsites, Termination, LimitationofLiability, Disclaimers, Governing, DisputesResolution, EuropeanUnionUsers, UnitedStatesLegalCompliance, TranslationInterpretation, Changes } from './data'

const Policies = () => {
  return (
    <div className='policy-wrap relative w-full pt-[7vh] tab:pt-[5vh] mob:pt-[5vh] border-t-[1px] border-t-[#12121280] bg-white flex mob:flex-col justify-between items-start mob:gap-[20px]'>
      <Left/>
      <Right/>
    </div>
  )
}

const Left = () => {
    return (
        <div className="policy-left w-[40%] tab:w-[20%] mob:w-full flex justify-start pt-[10px]">
            <p className='text-[#121212]'>
                This Page was last updated on: July 5, 2024
            </p>
        </div>
    )
}

const Right = () => {
    return (
        <div className="policy-right w-[55%] tab:w-[70%] mob:w-full flex flex-col items-start gap-[20px]">
            <div className="policy-group flex flex-col items-start gap-[15px]">
                <div className="title">
                    <h1 className='text-black text-[2.5vw] tab:text-[3vw] mob:text-[7vw] leading-[1.1em]'>
                        Interpretation and Definitions
                    </h1>
                </div>
                <div className="information mob:mt-[10px] flex flex-col items-start gap-[15px]">
                    <h2 className='text-black font-[900]'>
                        Interpretation
                    </h2>
                    <p className='text-[#121212bd]'>
                        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in the plural.
                    </p>
                    <div className="definitions flex flex-col justify-start gap-[15px]">
                        <h2 className='text-black font-[900]'>
                            Definitions
                        </h2>
                        {
                            definitions.map( p => 
                                <p className='text-[#121212bd]'>
                                    {p}
                                </p>
                            )
                        }
                        <p className='text-[#121212bd]'>
                            "Terms and Conditions (also referred as “Terms”) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <a className="para-link text-[#121212]" target="_blank" href='https://www.termsfeed.com/terms-conditions-generator/'> TermsFeed </a>Terms and Conditions Generator.
                        </p>
                        <p className='text-[#121212bd]'>
                            Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service. Website refers to Bits & Pieces, accessible from <a target="_blank" href='http://www.bitspieces.org/' className='para-link text-[#121212]'>http://www.bitspieces.org/</a>
                        </p>
                        <p className='text-[#121212bd]'>
                            You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                        </p>
                    </div>
                </div>
            </div>
            <PolicyGroup title={"Acknowledgment"} arr={Acknowledgments}/>
            <PolicyGroup title={"Links to Other Websites"} arr={LinkstoOtherWebsites}/>
            <PolicyGroup title={"Termination"} arr={Termination}/>
            <PolicyGroup title={"Limitation of Liability"} arr={LimitationofLiability}/>
            <PolicyGroup title={"'AS IS' and 'AS' AVAILABLE Disclaimer"} arr={Disclaimers}/>
            <PolicyGroup title={"Governing Law"} arr={Governing}/>
            <PolicyGroup title={"Disputes Resolution"} arr={DisputesResolution}/>
            <PolicyGroup title={"For European Union (EU) Users"} arr={EuropeanUnionUsers}/>
            <PolicyGroup title={"United States Legal Compliance"} arr={UnitedStatesLegalCompliance}/>
            <PolicyGroup title={"Translation Interpretation"} arr={TranslationInterpretation}/>
            <div className="policy-group flex flex-col items-start gap-[15px]">
                <div className="title">
                    <h1 className='text-black text-[2.5vw] tab:text-[3vw] mob:text-[7vw] leading-[1.1em]'>
                        Severability and Waiver
                    </h1>
                </div>
                <div className="information flex flex-col items-start gap-[15px]">
                    <h2 className='text-black font-[900]'>
                        Severability
                    </h2>
                    <p className='text-[#121212bd]'>
                        If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                    </p>
                    <h2 className='text-black font-[900]'>
                        Waiver
                    </h2>
                    <p className='text-[#121212bd]'>
                        Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party’s ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
                    </p>
                </div>
            </div>
            <PolicyGroup title={"Changes to These Terms and Conditions"} arr={Changes}/>
        </div>
    )
}

const PolicyGroup = ({title,arr}) => {
    return (
        <div className="policy-group flex flex-col items-start gap-[15px]">
            <h1 className='text-black text-[2.5vw] tab:text-[3vw] mob:text-[7vw] leading-[1.1em]'>
                {title}
            </h1>
            {
                arr.map( p =>
                    <p className='text-[#121212bd] mt-[10px]'>
                        {p}
                    </p>
                )
            }
        </div>
    )
}

export default Policies
