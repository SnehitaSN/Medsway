// src/components/Privacy.js
import React from "react";
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri"; 

function Privacy() {
    const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/product')
  };

  return (
    <div className="container mx-auto p-8">
    
      <h1 className="text-4xl font-bold mb-4 text-center font-sans">Medsway's Privacy Policy</h1>
      <h2 className="text-2xl font-semibold mb-2 font-sans">Introduction</h2>
      <p className="mb-4">
        Medsway.in. ("us" "we" or "Medsway") is committed to respecting the
        privacy rights of our customers, visitors, and other users of the
        Medsway services ("Services") provided via the Medsway website
        (collectively, "Site"). We created this Site Privacy Policy ("Privacy
        Policy") to give you confidence as you visit and use the Site, and to
        demonstrate our commitment to fair information practices and the
        protection of privacy. This Privacy Policy is only applicable to the
        Site, and not to any other websites that you may be able to access from
        the Site or any website of Medsway partners, each of which may have data
        collection, storage, and use practices and policies that differ
        materially from this Privacy Policy. Your use of the Site is governed by
        this Privacy Policy and the Terms of Use. If you are registering an
        account or using the Site on behalf of an individual or entity other
        than yourself, you represent that you are authorized by such individual
        or entity to accept this Privacy Policy on such individual's or entity's
        behalf.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Traffic Data Collected</h2>
      <p className="mb-4">
        We automatically track and collect the following categories of
        information when you visit our Site: (1) IP addresses; (2) domain
        servers; (3) types of computers accessing the Site; (4) types of web
        browsers used to access the Site; (5) referring source which may have
        sent you to the Site; and (6) other information associated with the
        interaction of your browser and the Site (collectively "Traffic Data").
      </p>
      <h2 className="text-2xl font-semibold mb-2">
        Personal Information Collected
      </h2>
      <p className="mb-4">
        In order for you to access certain areas of the Site, we may require you
        to provide us with certain information that personally identifies you
        ("Personal Information"). Personal Information includes the following
        categories of information: (1) Contact Data (such as your e-mail
        address, phone number and Medsway password); (2) Demographic Data (such
        as your gender, your date of birth and your zip code); (3) Insurance
        Data (such as your insurance carrier and insurance plan); and (4)
        Medical Data (such as your previous doctors and dentists ("Providers")
        visited, your reason for visit and your date of visit, your medical
        history, and other medical and protected health information you choose
        to share with us). If you communicate with us by, for example, e-mail or
        letter, any information provided in such communication may be collected
        as Personal Information.
      </p>
      <h2 className="text-2xl font-semibold mb-2">
        Interactive and Installed Tools
      </h2>
      <p className="mb-4">
        We also collect other information, some of which may be Personal
        Information that you voluntarily provide to us when you choose to use
        some of our interactive tools and services ("Interactive Tools"), such
        as searching for Providers, searching for available appointments with
        them, and completing medical history forms ("Medical History Forms")
        prior to appointments. We also collect information you provide
        voluntarily in free-form text boxes on the Site and through responses to
        surveys, questionnaires and the like. Some of the free Interactive Tools
        on our Site ask you for health-related Personal Information. You may
        elect to use certain Services available through the Site that require
        you to download and install software on your computer ("Installed
        Tools"). The Installed Tools may collect and transmit information from
        your computer system solely relating to use of the Installed Tools and
        for the purpose of providing you the relevant Services, for example, by
        informing Medsway when a user is logged on and available to receive
        update or alert notices.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
      <p className="mb-4">
        "Cookies" are small computer files that are transferred to your
        computer's hard drive that contain information such as user ID, user
        preferences, lists of pages visited and activities conducted while
        browsing the Site. At your option, expense and responsibility, you may
        block cookies or delete cookies from your hard drive. However, by
        disabling cookies, you may not have access to the entire set of features
        of the Site. Generally, we use "cookies" to customize your experience on
        our Site and to store your password so you do not have to re-enter it
        each time you visit the Site. In addition, our business partners may use
        cookies to provide us with anonymous data and information regarding the
        use of our Site. Specifically, some of our business partners use cookies
        to show Medsway ads on other sites on the internet as a result of you
        using the Site. Such cookies do not contain any Personal Information.
        You may opt out of receiving cookies placed by such third party vendors
        by visiting the Network Advertising Initiative opt out page. Other
        cookies used by our business partners may collect other non-personally
        identifying information, such as the computer's IP address, type of
        operating system, type of internet browsing software, what web pages
        were viewed at what time, the geographic location of your internet
        service provider and demographic information, such as gender and age
        range. This information is used to provide Medsway with more information
        about our user's demographics and internet behaviors. You may find out
        more about the information collected and how to opt-out of receiving
        these cookies by visiting our partner's website. We do not link the
        information stored in these cookies directly to any of your Personal
        Information you submit while on the Site, however.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Web Beacons</h2>
      <p className="mb-4">
        In limited circumstances we also may use "Web Beacons" to collect
        anonymous, non-personal information about your use of our Site and the
        sites of selected sponsors and advertisers, and your use of emails,
        special promotions or newsletters we send to you. "Web Beacons" are tiny
        graphic image files imbedded in a web page or email that provide a
        presence on the web page or email and send back to its home server
        information from the user's browser. The information collected by web
        beacons allows us to statistically monitor how many people are using the
        Site and selected sponsors' and advertisers' sites, or opening our
        emails, and for what purposes.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Website Analytics</h2>
      <p className="mb-4">
        We may use third party website analytics services in connection with the
        Site. These website analytics services do not collect Personal
        Information that you do not voluntarily enter into the Site. These
        services do not track your browsing habits across websites which do not
        use their services. We are using the information collected from these
        services to find usability problems to make the Site easier to use. The
        recordings will never identify you or your account.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Storage</h2>
      <p className="mb-4">
        We store all Traffic Data and review postings indefinitely, even after
        "deletion," and may archive such information elsewhere. We store all
        Personal Information until you request that we modify or delete it, in
        which case we may still wind up retaining some of that information for
        the reasons described in Section 20 below.
      </p>
      <h2 className="text-2xl font-semibold mb-2">
        Medsway's Use of Your Information
      </h2>
      <p className="mb-4">
        We may use your Personal Information to recommend certain resources or
        medical providers. We may use your Contact Data to send you information
        about Medsway or our products or Services, to contact you when
        necessary, including to remind you of upcoming or follow-up
        appointments, and in conjunction with your use of certain Interactive
        Tools. We may use your Demographic Data, your Traffic Data, your
        Insurance Data or your Medical Data to customize and tailor your
        experience on the Site, in emails and in other communications,
        displaying content that we think you might be interested in and
        according to your preferences. You agree that Medsway may use Personal
        Information to allow your doctors to make appointments with other
        doctors on your behalf through the Services. We may also use your
        de-identified Personal Information to run (or authorize third parties to
        run) statistical research on individual or aggregate health or medical
        trends. Such research would only use your Personal Information in an
        anonymous manner that cannot be tied directly back to you.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Sharing of Information</h2>
      <p className="mb-4">
        We share certain categories of information we collect from you in the
        ways described in this Privacy Policy, including as described below: You
        may choose to authorize Medsway to share your Personal Information with
        selected Providers. For example, if you elect to complete a Medical
        History Form using the Services in advance of an appointment, we may
        share your Medical History Form with your Providers if you agree that we
        may do so. We may share your Contact Data, Demographic Data, Insurance
        Data and Medical Data with Providers you choose to schedule on the Site.
        In order to customize your advertising interactions, we may share
        Personal Information with advertisers and other third parties only on an
        aggregate (i.e., non-personally-identifiable) basis. We may share your
        de-identified Personal Information with third parties to enable them to
        run statistical research on individual or aggregate health or medical
        trends. We share Personal Information and Traffic Data with our business
        partners who assist us by performing core services (such as hosting,
        billing, fulfillment, or data storage and security) related to our
        operation of the Site and/or by making certain Interactive Tools
        available to our users. Those business partners shall be bound to uphold
        the same standards of security and confidentiality that we have promised
        to you in this Privacy Policy, and they will only use your Contact Data
        and other Personal Information to carry out their specific business
        obligations to Medsway and to provide your requested medical care and
        services. We may transfer information about you to another company in
        connection with a merger, sale or acquisition by or of Medsway. In this
        event, we will use reasonable efforts to notify you before information
        about you is transferred and becomes subject to a different privacy
        policy. Medsway does not share, sell, rent or trade your Personal
        Information with any third parties for their promotional purposes.
      </p>
      <h2 className="text-2xl font-semibold mb-2">User Choice</h2>
      <p className="mb-4">
        You may choose not to provide us with any Personal Information. In such
        an event, you can still access and use much of the Site; however you
        will not be able to access and use those portions of the Site that
        require your Personal Information.
      </p>
      <h2 className="text-2xl font-semibold mb-2">
        Confidentiality and Security
      </h2>
      <p className="mb-4">
        Except as otherwise provided in this Privacy Policy, we will keep your
        Personal Information private and will not share it with third parties,
        unless we believe in good faith that disclosure of your Personal
        Information or any other information we collect about you is necessary
        to: (1) comply with a court order or other legal process; (2) protect
        the rights, property or safety of Medsway or another party; (3) enforce
        our Terms of Use; or (4) respond to claims that any posting or other
        content violates the rights of third-parties.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Doctors and Dentists</h2>
      <p className="mb-4">
        Doctors, dentists, their employees, and their agents should be
        particularly aware of their obligations of patient confidentiality,
        including without limitation their obligations under the related law,
        both in communicating with Medsway and in responding to a review of
        their services posted on our Site. Medsway does not have, and will not
        accept, any obligations of confidentiality with respect to any
        communications other than those expressly stated in this Privacy Policy
        and Medsway's Terms of Use.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Public Information</h2>
      <p className="mb-4">
        Any information that you may reveal in a review posting or other online
        discussion or forum is intentionally open to the public and is not in
        any way private. You should think carefully before disclosing any
        personally identifiable information in any public forum. What you have
        written may be seen and/or collected by third parties and may be used by
        others in ways we are unable to control or predict.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Security</h2>
      <p className="mb-4">
        The security of your Personal Information is important to us. We follow
        generally accepted industry standards to protect the Personal
        Information submitted to us, both during transmission and once we
        receive it. For example, when you enter sensitive information on our
        Site, we encrypt that information using secure socket layer technology
        (SSL). Although we make good faith efforts to store Personal Information
        in a secure operating environment that is not open to the public, you
        should understand that there is no such thing as complete security, and
        we do not guarantee that there will be no unintended disclosures of your
        Personal Information. If we become aware that your Personal Information
        has been disclosed in a manner not in accordance with this Privacy
        Policy, we will use reasonable efforts to notify you of the nature and
        extent of the disclosure (to the extent we know that information) as
        soon as reasonably possible and as permitted by law.
      </p>
      <h2 className="text-2xl font-semibold mb-2">
        Lost or Stolen Information
      </h2>
      <p className="mb-4">
        You must promptly notify us if your Contact Data is lost, stolen, or
        used without permission. In such an event, we will remove that Contact
        Data from your account and update our records accordingly.
      </p>
      <h2 className="text-2xl font-semibold mb-2">
        Updates and Changes to Privacy Policy
      </h2>
      <p className="mb-4">
        We reserve the right, at any time, to add to, change, update, or modify
        this Privacy Policy so please review it frequently. If we do, then we
        will notify you here, as well as by posting a notice on our Site and,
        where appropriate, a link to the modified policy so that you can review
        it. In all cases, use of information we collect is subject to the
        Privacy Policy in effect at the time such information is collected.
      </p>
      <h2 className="text-2xl font-semibold mb-2">
        Controlling Your Personal Information
      </h2>
      <p className="mb-4">
        As a registered user of the Site, you can modify some of the Personal
        Information you have included in your profile or change your username by
        logging in and accessing your account. Upon your request, Medsway will
        use commercially reasonable efforts to delete your account and the
        Personal Information in your profile; however, it may be impossible to
        remove your account without some residual information being retained by
        Medsway. Medsway has no obligation to delete any data or information you
        provide on a Medical History Form following termination of your account
        or the account of any medical professional to whom your Medical History
        Form was submitted through the Site. Registered users who wish to close
        their account should contact privacy@Medsway.in.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Links to Other Websites</h2>
      <p className="mb-4">
        The Site contains links to third party websites to which Medsway has no
        affiliation. Medsway does not share your personal information with those
        websites and is not responsible for their privacy practices. Some web
        sites may have the look and feel of our Site. Please be aware that you
        may be on a different site and that this Privacy Policy only covers our
        Site. Should you decide to visit one of these third party websites, we
        suggest that you read its privacy policy.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Contacts</h2>
      <p className="mb-4">
        If you have any comments, concerns or questions about this Privacy
        Policy, please contact us at privacy@Medsway.in or Medsway, 19-6-170,
        1st Floor, Madhapur, Hyderabad, Telangana.
      </p>
      <p className="mt-8 text-gray-500">
        Copyright 2024 © Medsway. All Rights Reserved.
      </p>
      <button
                  onClick={handleBackClick}
                  className="flex items-center text-blue-800 focus:outline-none mt-4"
                >
                  <span className="font-sans text-lg">Go Back</span>
                  <RiArrowGoBackFill  className="ml-2" size={20} />
                 
                </button>
    </div>
  );
}

export default Privacy;
