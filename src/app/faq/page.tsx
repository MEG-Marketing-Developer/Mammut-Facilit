"use client";
import Breadcrambs from "../components/Breadcrambs";
import Accordion from "../components/Accordion";
import { accordionItems } from "../data";

interface IProps {

}
const faqList = accordionItems.map((faq) => (
    <Accordion key={faq.id} items={[faq]} />
    ));

const faq = ({}: IProps ) =>{
    return (
        <> 
    <Breadcrambs pageTitle="faq" />
          {/* FAQ  */}
          <h2 className="text-left py-16 px-8 text-5xl font-black text-[#113553]">
      Frequently Asked Questions
        </h2>
      <div className="p-8">{faqList}</div>
        </>
    )
}

export default faq