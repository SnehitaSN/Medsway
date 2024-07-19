import React from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

function Terms() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/product");
  };
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-center font-sans">
        Medsway's Terms of use and services.
      </h1>
      <h2 className="text-xl font-normal text-center mb-2 font-sans">
        <p className="mb-6 leading-relaxed text-center">
          THIS IS AN AGREEMENT BETWEEN YOU OR THE ENTITY THAT YOU REPRESENT{" "}
          <br />
          (hereinafter 'You' or 'Your') AND Medsway, Product of Yro Systems Pvt
          Ltd (hereinafter <br /> 'Medsway') GOVERNING YOUR USE OF Medsway SUITE
          OF ONLINE APPOINTMENT <br /> AND COLLABORATION SOFTWARE (hereinafter
          'Medsway Service(s)').
        </p>
      </h2>
      {/* 1 */}
      <h2 className="text-2xl font-semibold mb-2 font-sans">
        Parts of this Agreement
      </h2>
      <p className="mb-4">
        This Agreement consists of the following terms and conditions
        (hereinafter the 'General Terms') and terms and conditions, if any,
        specific to use of individual Services (hereinafter the 'Service
        Specific Terms'). The General Terms and Service Specific Terms are
        collectively referred to as the 'Terms'. In the event of a conflict
        between the General Terms and Service Specific Terms, the Service
        Specific Terms shall prevail.
      </p>
      {/* 2 */}
      <h2 className="text-2xl font-semibold mb-2">Acceptance of the Terms</h2>
      <p className="mb-4">
        You must be of legal age to enter into a binding agreement in order to
        accept the Terms. If you do not agree to the General Terms, do not use
        any of our Services. If you agree to the General Terms and do not agree
        to any Service Specific Terms, do not use the corresponding Service. You
        can accept the Terms by checking a checkbox or clicking on a button
        indicating your acceptance of the terms or by actually using the
        Services. The Information that you obtain or receive from Medsway, and
        its employees, contractors, partners, sponsors, advertisers or otherwise
        on the Site is for informational and scheduling purposes only. THE
        INFORMATION PROVIDED ON THE SITE IS NOT INTENDED AS A SUBSTITUTE FOR,
        NOR DOES IT REPLACE, PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS, OR
        TREATMENT. DO NOT DISREGARD, AVOID OR DELAY OBTAINING MEDICAL ADVICE
        FROM A QUALIFIED HEALTH CARE PROFESSIONAL BECAUSE OF SOMETHING YOU MAY
        HAVE READ ON THE SITE. DO NOT USE THE SITE FOR EMERGENCY MEDICAL NEEDS.
        IF YOU EXPERIENCE A MEDICAL EMERGENCY CALL DOCTOR DIRECTLY. YOUR USE OF
        INFORMATION PROVIDED ON THE SITE IS SOLELY AT YOUR OWN RISK. NOTHING
        STATED OR POSTED ON THE SITE OR AVAILABLE THROUGH ANY SERVICES IS
        INTENDED TO BE, AND MUST NOT BE TAKEN TO BE, THE PRACTICE OF MEDICINE OR
        THE PROVISION OF MEDICAL CARE. We do not recommend or endorse any
        specific tests, physicians, procedures, opinions, or other information
        that may appear on the Site. If you rely on any of the Information
        provided by the Site, you do so solely at your own risk.
      </p>
      {/* 3 */}
      <h2 className="text-2xl font-semibold mb-2">Registration</h2>
      <p className="mb-4">
        As part of the registration process, you will provide an e-mail address,
        mobile number and create a password. These are your credentials for
        accessing the Services that are only available to members
        ("Credentials"). You should keep your Credentials private and not share
        your Credentials with anyone else. You are responsible for notifying us
        if your password has been hacked or stolen. You may notify us by sending
        an email to service@Medsway.in
      </p>
      {/* 4 */}
      <h2 className="text-2xl font-semibold mb-2">Doctor, Appointment</h2>
      <p className="mb-4">
        WE MAKE NO GUARANTEES, REPRESENTATIONS OR WARRANTIES, WHETHER EXPRESSED
        OR IMPLIED, WITH RESPECT TO PROFESSIONAL QUALIFICATIONS, EXPERTISE,
        QUALITY OF WORK OR OTHER INFORMATION HEREIN. FURTHER WE DO NOT IN ANY
        WAY ENDORSE ANY INDIVIDUAL DESCRIBED HEREIN. IN NO EVENT SHALL WE BE
        LIABLE TO YOU OR ANYONE ELSE FOR ANY DECISION MADE OR ACTION TAKEN BY
        YOU IN RELIANCE ON SUCH INFORMATION. We have no control over, and cannot
        guarantee the availability of any physician at any particular time. We
        will not be liable for cancelled or otherwise unfulfilled appointments
        or any injury resulting therefrom, or for any other injury resulting
        from the use of the Site or Services whatsoever. You are strongly
        advised to perform your own investigation prior to selecting a health
        care professional by making confirming telephone calls to the
        appropriate licensing authorities to verify listed credentials and
        education, and to further verify information about a particular
        physician or medical provider by confirming with the doctor's office,
        your current physician, the medical association relative to the doctor's
        specialty and your state medical board.
      </p>
      {/* 5 */}
      <h2 className="text-2xl font-semibold mb-2">
        Authorization and Acknowledgement
      </h2>
      <p className="mb-4">
        In connection with using the Site and the Services to locate and
        schedule appointments with medical professionals, you understand that:
        Medsway selects physicians or medical providers to be featured on the
        Site based on a pre-existing contractual agreement with the physicians
        or medical providers; Medsway will provide you with a list of physicians
        or medical providers who may be suitable to deliver the health care that
        you are seeking based solely on the information that you provide to
        Medsway (such as Specialty, proximity to your geographical location and
        additional criteria that you specify); you are ultimately responsible
        for choosing your own physician or medical provider;
      </p>
      {/* 6 */}
      <h2 className="text-2xl font-semibold mb-2">
        Information Presentation/Editorial Control
      </h2>
      <p className="mb-4">
        We make the Site available as a service to consumers and health care
        professionals for the purposes of providing an informative and
        educational resource. We may, but have no obligation to, have non
        user-posted information reviewed by the Site's editorial personnel. It
        is important to note, however, that the timeliness and accuracy of any
        or all of the Information is not guaranteed. Neither the authors, the
        editorial personnel, nor any other party who has been involved in the
        preparation or publication of this work can assure you that the
        Information contained herein is in every respect accurate or complete,
        and they are not responsible for any errors or omissions or for the
        results obtained from the use of such information. You are encouraged to
        independently confirm the Information contained herein with other
        sources and to seek the advice of a qualified physician. PRACTITIONER
        INFORMATION: Physician and practice information found on the Site is
        intended for general reference purposes only. Physician and other health
        provider information found on the Site is both self-reported, by the
        physician and/or office staff, and collected from multiple other data
        sources that may not be confirmed by the physician. Such information
        often changes frequently and may become out of date or inaccurate.
        Neither the Site nor Medsway provides any advice or qualification
        certification about any particular physician or provider. Our
        relationship with sponsors or physicians in a particular area is based
        on criteria we establish. PROCEDURES/PRODUCTS/SERVICES: The procedures,
        products, services and devices discussed and/or advertised within the
        Site are not applicable to all individuals, patients or all clinical
        situations. We make no claims as to the effectiveness of any such
        procedures, products, services and devices. Any products and/or services
        represented on the Site by advertisers, sponsors, and other Site
        participants, either paid or unpaid, are presented for your awareness
        and do not necessarily imply appropriateness for any particular
        individual or prediction of effectiveness, outcome or success.
      </p>
      {/* 7 */}
      <h2 className="text-2xl font-semibold mb-2">Your Personal Information</h2>
      <p className="mb-4">
        In order to register, you must provide certain personal and medical
        information about yourself. You may voluntarily submit, and hereby
        authorize Medsway, its employees, agents and others operating on its
        behalf, to use and/or disclose personal and health-related information
        about you, including, without limitation, your name, address, phone
        number and contact information; medical and social history; current
        medical needs; and other information that is either requested by Medsway
        or volunteered by you ('Personal Information'). You have the right to
        refuse to authorize the use and/or disclosure of your Personal
        Information. However if you chose to exercise this right, you may not be
        able to utilize some features of the Site. The Medsway Privacy Policy
        explains the information practices that apply to Personal Information we
        have about you, as well as any choices you can make about the ways this
        information is used. Please review it carefully.
      </p>
      {/* 8 */}
      <h2 className="text-2xl font-semibold mb-2">Your Responsibilities</h2>
      <p className="mb-4">
        Even though the Services are provided free of charge, the usual and
        customary charges for any medical services rendered by collaborating
        physicians profiled on the Site will apply and will be entirely your
        responsibility. You are responsible for all use of the Site and for all
        use of your Credentials, including use by others to whom you have given
        your Credentials. You may use the Site and the Services for lawful,
        non-commercial purposes only. You may not use the Site in any manner
        that could damage, disable, overburden, or impair our servers or
        networks, or interfere with any other party's use and enjoyment of the
        Site or the Services. You may not attempt to gain unauthorized access to
        any of the Services, user accounts, or computer systems or networks,
        through hacking, password mining or any other means. Without limiting
        any of the foregoing, you agree that you shall not (and you agree not to
        allow any third party to): copy, modify, adapt, translate, or reverse
        engineer any portion of the Site, its content or materials and/or the
        Services; remove any copyright, trademark or other proprietary rights
        notices contained in or on the Site and/or the Services or in or on any
        content or other material obtained via the Site and/or the Services; use
        any robot, spider, site search/retrieval application, or other automated
        device, process or means to access, retrieve or index any portion of the
        Site and/or the Services; access, retrieve or index any portion of the
        Site and/or the Services for purposes of constructing or populating a
        searchable database of reviews related to the health care industry or
        medical physicians; reformat or frame any portion of the web pages that
        are part of the Site and/or the Services; fraudulently misuse the
        Services by scheduling an appointment with a physician which you have no
        intention of keeping; create user accounts by automated means or under
        false or fraudulent pretenses; or collect or store personal data about
        other users in connection with the prohibited activities described in
        this paragraph. In addition to our rights in these Terms of Use, we may
        take any legal action and implement any technical remedies to prevent
        the violation of this provision and to enforce these Terms of Use.
      </p>
      {/* 9 */}
      <h2 className="text-2xl font-semibold mb-2">
        Changes to These Terms of Use
      </h2>
      <p className="mb-4">
        We may change these Terms of Use at any time, as we reasonably deem
        appropriate. Upon any change in these Terms of Use, we will post the
        amended agreement on the Site with notice of the changes. Your continued
        use of the Site and/or the Services following such notification shall
        constitute your affirmative acknowledgement of the Terms of Use, the
        modification and agreement to abide and be bound by the Terms of Use, as
        amended. If at any time you choose not to accept these Terms of Use,
        including following receipt of notification of any modifications hereto,
        then please do not use the Site.
      </p>
      {/* 10 */}
      <h2 className="text-2xl font-semibold mb-2">Changes to the Services</h2>
      <p className="mb-4">
        We may from time to time add new services to the Services, substitute a
        new service for one of the existing Services, or discontinue or suspend
        one of the existing Services. Information about the new services will be
        included on the Site, and the users of new services will be governed by
        these Terms of Use. You agree that Medsway will not be liable to you or
        any third party for any suspension or discontinuation of any of the
        Services.
      </p>
      {/* 11 */}
      <h2 className="text-2xl font-semibold mb-2">Links to Other Sites</h2>
      <p className="mb-4">
        The Site may include links to other websites, including links provided
        as automated search results. Some of these sites may contain materials
        that are objectionable, unlawful, or inaccurate. These links are
        provided for your convenience only and do not mean that we endorse these
        sites or the products and services they provide. You acknowledge and
        agree that we are not responsible or liable for the content or accuracy
        of these other sites.
      </p>
      {/* 12 */}
      <h2 className="text-2xl font-semibold mb-2">Fees and Payments</h2>
      <p className="mb-4">
        Subscriptions to paid Services are available on yearly subscription
        plans. Your subscription will be automatically renewed at the end of
        each subscription period unless you inform us that you do not wish to
        renew the subscription. The subscription fee will be charged to the
        Credit Card last used by you. If you would like the payment for the
        renewal to be made through a different Credit Card or if you do not wish
        to renew the subscription, you agree to inform us at least seven days
        prior to the renewal date. In the event of termination of the
        subscription, you will be refunded the subscription fee for the unused
        portion of the subscription period. Medsway reserves the right to change
        the subscription fee and to charge for use of Services that are
        currently available free of charge. You will not be charged for using
        any Service unless you have opted for a paid subscription plan.
        Information on the subscription options and charges for all paid
        Services email contact@Medsway.in.
      </p>
      {/* 13 */}
      <h2 className="text-2xl font-semibold mb-2">Restrictions on Use</h2>
      <p className="mb-4">
        In addition to all other terms and conditions of this Agreement, you
        shall not: (i) transfer or otherwise make available to any third party
        the Services; (ii) provide any service based on the Services without
        prior written permission; (iii) use the third party links to sites
        without agreeing to their website terms & conditions; (iv) post links to
        third party sites or use their logo, company name, etc. without their
        prior written permission; or (v) use the Services for spamming and other
        illegal purposes.
      </p>
      {/* 14 */}
      <h2 className="text-2xl font-semibold mb-2">No Spam</h2>
      <p className="mb-4">
        You may not use contact information provided by our users or
        collaborating physicians, or harvest such information for the purpose of
        sending, or to facilitate the sending, of unsolicited bulk
        communications such as SPAM. You may not allow others to use your
        account to violate the terms of this section. We may terminate your
        membership or access to the Site immediately and take other legal action
        if you or anyone using your Credentials violates these provisions.
      </p>
      {/* 15 */}
      <h2 className="text-2xl font-semibold mb-2">Additional Terms</h2>
      <p className="mb-4">
        Certain of the Services on the Site may have additional terms (such as
        policies, guidelines, and rules) that will further govern your use of
        that particular Service and supplement these Terms of Use. If you choose
        to register for or access any such Services, you will be presented with
        any relevant additional terms and conditions at that time. By using
        those Services, you agree to comply with such additional guidelines and
        rules
      </p>
      {/* 16 */}
      <h2 className="text-2xl font-semibold mb-2">
        Content You Post or Submit
      </h2>
      <p className="mb-4">
        You will have the opportunity to submit feedback regarding your
        experiences with doctors who are featured on the Site, to submit
        inquiries concerning possible medical needs and to participate in the
        other interactive and community features of the Site (collectively
        "Posted Information"). It is important that you act responsibly when
        providing Posted Information. In providing feedback, please give clear,
        honest information about the doctor and your experiences, but do not use
        inappropriate language, make gratuitous personal criticisms or comments
        or provide information that others could use to determine your identity.
        When participating in other interactive or community aspects of the
        Service, please do not post any information that another user or
        physician may use to identify you as an individual, but please do
        include all relevant information in a concise manner to help us provide
        you with a helpful response. We reserve the right to publish your Posted
        Information as part of the Service and to also to remove your Posted
        Information for any reason. We are not, however, responsible for any
        failure or delay in removing Posted Information. Keep in mind that the
        Posted Information of others is simply opinion and should not be relied
        on. Besides: You are solely responsible for any Posted Information that
        you submit, publish or display on the Site or transmit to other members
        and/or other users of the Site. You may not post, distribute, or
        reproduce in any way any copyrighted material, trademarks, or other
        proprietary information without obtaining the prior written consent of
        the owner of such proprietary rights. You may not submit any content or
        material that infringes, misappropriates or violates the intellectual
        property, publicity, privacy or other rights of any party. You may not
        provide any Posted Content that falsely expresses or implies that such
        content or material is sponsored or endorsed by Medsway. You may not
        provide any Posted Content that is unlawful or that promotes or
        encourages illegal activity. You understand and agree that Medsway may
        (but is not obligated to) review and delete any Posted Content that in
        the sole judgment of Medsway violates these Terms of Use or which might
        be offensive, illegal, or that might violate the rights of, harm, or
        threaten the safety of other users or members of the Site and/or other
        website users. You agree that you will only provide Posted Content that
        you believe to be true and you will not purposely provide false or
        misleading information. By posting Posted Content on the Site, you agree
        to and hereby do grant, and you represent and warrant that you have the
        right to grant, Medsway, its contractors, and the users of the Site an
        irrevocable, perpetual, royalty-free, fully sublicensable, fully paid
        up, worldwide license to use, copy, publicly perform, digitally perform,
        publicly display, and distribute such Posted Content and to adapt, edit,
        translate, prepare derivative works of, or incorporate into other works,
        such Posted Content. This license is non-exclusive, except you agree
        that Medsway shall have the exclusive right to practice this license to
        the extent of combining your Posted Content with the Posted Content of
        other Medsway users for purposes of constructing or populating a
        searchable database of reviews and information related to the health
        care industry. The following is a partial list of the kind of content
        and communications that are illegal or prohibited on/through the Site.
        Medsway reserves the right to investigate and take appropriate legal
        action in its sole discretion against anyone who violates this
        provision, including without limitation, removing the offending
        communication from the Services and terminating the membership of such
        violators or blocking your use of the Services and/or the Site. You may
        not post content that: involves the transmission of unsolicited mass
        mailing or "spamming"; harasses or advocates harassment of another
        person; is false or intentionally misleading; violates the intellectual
        property or other rights of any person; is threatening, obscene,
        defamatory or libelous; or is pornographic or sexually explicit in
        nature.
      </p>
      {/* 17 */}
      <h2 className="text-2xl font-semibold mb-2">Your Use of Content</h2>
      <p className="mb-4">
        Except for Posted Content that you or any other visitors to the Site
        submit, all of the Information available on or through the Services
        and/or the Site, including without limitation, text, photographs,
        graphics and video and audio content, is owned by us and our licensors
        and is protected by copyright, trademark, patent, and trade secret laws,
        other proprietary rights, and international treaties. You acknowledge
        that the Services and any underlying technology or software used in
        connection with the Services contain Medsway's proprietary information.
        We give you permission to use the aforementioned content for personal,
        non-commercial purposes only and do not transfer any intellectual
        property rights to you by virtue of permitting your use of the Services.
        You may print, download, and store information from the Site for your
        own convenience, but you may not copy, distribute, republish (except as
        permitted in this paragraph), sell, or exploit any of the content, or
        exploit the Site in whole or in part, for any commercial gain or purpose
        whatsoever. Except as is expressly and unambiguously provided herein,
        Medsway and its suppliers do not grant you any express or implied
        rights, and all rights in the Site and the Services not expressly
        granted by Medsway to you are retained by Medsway.
      </p>
      {/* 18 */}
      <h2 className="text-2xl font-semibold mb-2">Disclaimer of Warranties</h2>
      <p className="mb-4">
        WE PROVIDE THE SITE AND THE SERVICES 'AS IS', 'WITH ALL FAULTS' AND 'AS
        AVAILABLE'. WE MAKE NO EXPRESS OR IMPLIED WARRANTIES OR GUARANTEES ABOUT
        THE SERVICES. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE HEREBY DISCLAIM
        ALL SUCH WARRANTIES, INCLUDING ALL STATUTORY WARRANTIES, WITH RESPECT TO
        THE SERVICES AND THE SITE, INCLUDING WITHOUT LIMITATION ANY WARRANTIES
        THAT THE SERVICES ARE MERCHANTABLE, OF SATISFACTORY QUALITY, ACCURATE,
        FIT FOR A PARTICULAR PURPOSE OR NEED, OR NON-INFRINGING. WE DO NOT
        GUARANTEE THAT THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE
        SERVICES WILL BE EFFECTIVE, RELIABLE OR ACCURATE OR WILL MEET YOUR
        REQUIREMENTS. WE DO NOT GUARANTEE THAT YOU WILL BE ABLE TO ACCESS OR USE
        THE SERVICES (EITHER DIRECTLY OR THROUGH THIRD-PARTY NETWORKS) AT TIMES
        OR LOCATIONS OF YOUR CHOOSING. WE ARE NOT RESPONSIBLE FOR THE ACCURACY,
        RELIABILITY, TIMELINESS OR COMPLETENESS OF INFORMATION PROVIDED BY USERS
        OF THE SITE OR ANY OTHER DATA OR INFORMATION PROVIDED OR RECEIVED
        THROUGH THE SITE. EXCEPT AS EXPRESSLY SET FORTH HEREIN, Medsway MAKES NO
        WARRANTIES ABOUT THE INFORMATION SYSTEMS, SOFTWARE AND FUNCTIONS MADE
        ACCESSIBLE THROUGH THE SITE OR ANY OTHER SECURITY ASSOCIATED WITH THE
        TRANSMISSION OF SENSITIVE INFORMATION. Medsway DOES NOT WARRANT THAT THE
        SITE OR THE SERVICES WILL OPERATE ERROR-FREE, THAT LOSS OF DATA WILL NOT
        OCCUR, OR THAT THE SERVICES SOFTWARE OR SITE ARE FREE OF COMPUTER
        VIRUSES, CONTAMINANTS OR OTHER HARMFUL ITEMS.
      </p>
      {/* 19 */}
      <h2 className="text-2xl font-semibold mb-2">
        General Limitation of Liability
      </h2>
      <p className="mb-4">
        YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY DISPUTE WITH US IS THE
        CANCELLATION OF YOUR REGISTRATION. IN NO EVENT SHALL OUR TOTAL
        CUMULATIVE LIABILITY TO YOU FOR ANY AND ALL CLAIMS RELATING TO OR
        ARISING OUT OF YOUR USE OF THE SERVICES OR THE SITE, REGARDLESS OF THE
        FORM OF ACTION, EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT OF FEES, IF
        ANY, THAT YOU PAID TO UTILIZE THE SITE OR THE SERVICES OR (B) Rs1. IN NO
        EVENT SHALL WE BE LIABLE TO YOU (OR TO ANY THIRD PARTY CLAIMING UNDER OR
        THROUGH YOU) FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR
        EXEMPLARY DAMAGES ARISING FROM YOUR USE OF, OR INABILITY TO USE, THE
        SITE AND/OR THE SERVICES. THESE EXCLUSIONS APPLY TO ANY CLAIMS FOR LOST
        PROFITS, LOST DATA, LOSS OF GOODWILL, WORK STOPPAGE, COMPUTER FAILURE OR
        MALFUNCTION, ANY OTHER COMMERCIAL DAMAGES OR LOSSES, OR MEDICAL
        MALPRACTICE OR NEGLIGENCE OF PHYSICIANS UTILIZED THROUGH USE OF THE
        SERVICE, EVEN IF WE KNEW OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH
        DAMAGES. BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION
        OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES,
        IN SUCH STATES OR JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE
        EXTENT PERMITTED BY LAW.'
      </p>
      {/* 20 */}
      <h2 className="text-2xl font-semibold mb-2">Termination </h2>
      <p className="mb-4">
        We may terminate and/or suspend your registration immediately, without
        notice, if there has been a violation of these Terms of Use or other
        policies and terms posted on the Site by you or by someone using your
        Credentials. We may also cancel or suspend your registration for any
        other reason, including inactivity for an extended period, but will
        attempt to notify you in advance of such cancellation or suspension.
        Medsway shall not be liable to you or any third party for any
        termination of your access to the Site and/or the Services. Further, you
        agree not to attempt to use the Site and/or the Services after any such
        deletion, deactivation or termination. Sections 2, 4, 14, 16, 17, 18,
        19, 20 and 22 through 25 shall survive any termination or expiration of
        these Terms of Use.
      </p>
      {/* 21 */}
      <h2 className="text-2xl font-semibold mb-2">Indemnification</h2>
      <p className="mb-4">
        Upon a request by us, you agree to defend, indemnify, and hold harmless
        us, our employees, contractors, officers, directors, agents, parent,
        other affiliated companies, and suppliers, from all liabilities, claims,
        demands and expenses, including attorney's fees, made by any third party
        that arise from or are related to (a) your access to the Site, (b) your
        use of the Services, or (c) the violation of these Terms of Use by you
        or any third party using your Credentials of any intellectual property
        or other right of any person or entity. The foregoing indemnification
        obligation does not apply to liabilities, claims and expenses arising as
        a result of our own gross negligence or intentional misconduct.
      </p>
      {/* 22 */}
      <h2 className="text-2xl font-semibold mb-2">
        Electronic Contracting and Notices
      </h2>
      <p className="mb-4">
        Your affirmative act of using this Site and/or registering for the Site
        or the Services constitutes your electronic signature to these Terms of
        Use and your consent to enter into agreements with us electronically.
      </p>
      {/* 23 */}
      <h2 className="text-2xl font-semibold mb-2">Copyright Dispute Policy</h2>
      <p className="mb-4">
        Medsway has adopted the following general policy toward copyright
        infringement. The address of Medsway's Designated Agent to Receive
        Notification of Claimed Infringement ("Designated Agent") is provided at
        the bottom of this section. Medsway Policy. It is Medsway's policy to
        (a) block access to or remove material that it believes in good faith to
        be copyrighted material that has been illegally copied and distributed
        by any of our advertisers, affiliates, content providers, members or
        users; and (b) remove and discontinue service to repeat offenders.
        Procedure for Reporting Copyright Infringements. If you believe that
        material or content residing on or accessible through the Site or the
        Services infringes a copyright, please send a notice of copyright
        infringement containing the following information to the Designated
        Agent listed below ("Proper Bona Fide Infringement Notification"): A
        physical or electronic signature of a person authorized to act on behalf
        of the owner of the copyright that has been allegedly infringed;
        Identification of works or materials being infringed; Identification of
        the material that is claimed to be infringing including information
        regarding the location of the infringing materials that the copyright
        owner seeks to have removed, with sufficient detail so that Medsway is
        capable of finding and verifying its existence; Contact information
        about the notifier including address, telephone number and, if
        available, email address; A statement that the notifier has a good faith
        belief that the material is not authorized by the copyright owner, its
        agent, or the law; and A statement made under penalty of perjury that
        the information provided is accurate and the notifying party is
        authorized to make the complaint on behalf of the copyright owner. Upon
        Receipt of a Bona Fide Infringement Notification. Once Proper Bona Fide
        Infringement Notification is received by the Designated Agent, it is
        Medsway's policy: to remove or disable access to the infringing
        material; to notify the content provider, member or user that it has
        removed or disabled access to the material; and that for repeat
        offenders, Medsway will also terminate such content provider's, member's
        or user's access to the service.
      </p>
      {/* 24 */}
      <h2 className="text-2xl font-semibold mb-2">
        Procedure to Supply a Counter-Notice to the Designated Agent.
      </h2>
      <p className="mb-4">
        If the content provider, member or user believes that the material that
        was removed or to which access was disabled is either not infringing, or
        the content provider, member or user believes that it has the right to
        post and use such material from the copyright owner, the copyright
        owner's agent, or pursuant to the law, the content provider, member or
        user must send a counter-notice containing the following information to
        the Designated Agent listed below: A physical or electronic signature of
        the content provider, member or user; Identification of the material
        that has been removed or to which access to has been disabled and the
        location at which the material appeared before it was removed or
        disabled; A statement that the content provider, member or user has a
        good faith belief that the material was removed or disabled as a result
        of mistake or a misidentification of the material; and The content
        provider's, member's or user's name, address, telephone number, and, if
        available, email address and a statement that such person or entity
        consents to the jurisdiction of the Federal Court for the judicial
        district in which the content provider's, member's or user's address is
        located, or if the content provider's, member's or user's address is
        located outside the United States, for any judicial district in which
        Medsway is located, and that such person or entity will accept service
        of process from the person who provided notification of the alleged
        infringement.
      </p>
      {/* 25 */}
      <h2 className="text-2xl font-semibold mb-2">Removal</h2>
      <p className="mb-4">
        If a counter-notice is received by the Designated Agent, Medsway may
        send a copy of the counter-notice to the original complaining party
        informing that person that it may replace the removed material or cease
        disabling it in 10 business days. Unless the copyright owner files an
        action seeking a court order against the content provider, member or
        user, the removed material may be replaced or access to it restored in
        10 to 14 business days or more after receipt of the counter-notice, at
        Medsway's discretion. Address for Designated Agent. Please contact
        Medsway's Designated Agent to Receive Notification of Claimed
        Infringement at the following address: Copyright Agent, Yro Systems Pvt
        Ltd, (Medsway), NO.5/565, Velachery Tambaram Main Road, Vijaya nagaram,
        CHENNAI, 600100. Email: legal@Medsway.in
      </p>
      {/* 26 */}
      <h2 className="text-2xl font-semibold mb-2">Entire Agreement</h2>
      <p className="mb-4">
        These Terms of Use and any supplemental terms, policies, rules and
        guidelines posted on the Site, including the Privacy Policy, constitute
        the entire agreement between you and us and supersede all previous
        written or oral agreements. If any part of these Terms of Use is held
        invalid or unenforceable, that portion shall be construed in a manner
        consistent with applicable law to reflect, as nearly as possible, the
        original intentions of the parties, and the remaining portions shall
        remain in full force and effect. The failure of Medsway to exercise or
        enforce any right or provision of these Terms of Use shall not
        constitute a waiver of such right or provision. The failure of either
        party to exercise in any respect any right provided for herein shall not
        be deemed a waiver of any further rights hereunder.
      </p>
      {/* 27 */}
      <h2 className="text-2xl font-semibold mb-2">
        Choice of Law and Dispute Resolution
      </h2>
      <p className="mb-4">
        These Terms if Use shall be deemed to have been entered into and shall
        be construed and enforced in accordance with the laws of the State of
        Tamil Nadu as applied to contracts made and to be performed entirely
        within Chennai, without giving effect to the state's conflicts of law
        statute. Any controversy, dispute or claim arising out of or related to
        these Terms of Use or your use of the Services shall be settled by final
        and binding arbitration to be conducted by an arbitration tribunal in
        the State, City, Jurisdiction of Chennai, Tamil Nadu. The arbitration
        tribunal shall consist of one arbitrator. The decision or award of the
        arbitrator shall be final, and judgment upon such decision or award may
        be entered in any competent court or application may be made to any
        competent court for judicial acceptance of such decision or award and an
        order of enforcement. The parties agree that the arbitrator shall have
        the authority to impose equitable and injunctive relief as well as to
        award monetary relief, as the arbitrator deems appropriate.
      </p>
      {/* 28 */}
      <h2 className="text-2xl font-semibold mb-2">Assignment</h2>
      <p className="mb-4">
        We may assign this contract at any time to any parent, subsidiary, or
        any affiliated company, or as part of the sale to, merger with, or other
        transfer of our company to another entity. We will post a notice on the
        Site regarding any change of ownership so that you have the opportunity
        to discontinue your use of the Site or cancel your registration if you
        do not wish to continue to use the Site and the Services under the new
        ownership. You may not assign, transfer or sub-license these Terms of
        Use to any one else and any attempt to do so in violation of this
        section shall be null and void.
      </p>
      {/* 29 */}
      <h2 className="text-2xl font-semibold mb-2">Eligibility</h2>
      <p className="mb-4">
        You must be 18 or over, or the legal age to form a binding contract in
        your jurisdiction if that age is greater than 18 years of age, to
        register with us or use the Site and the Services. If you are between
        the ages of 13 and 18 or the applicable legal age in your jurisdiction,
        you can use the Site or Services only in conjunction with, and under the
        supervision of, your parent or guardian who has agreed to the Terms of
        Use. If you are under the age of 13, you may not use the Site or
        Services, in compliance with the Children's Online Privacy Protection
        Act. If you are the parent or legal guardian of a child under the age of
        18, you may use the Site or Services on behalf of such minor child. By
        using the Site or Services on behalf of a minor child, you represent and
        warrant that you are the parent or legal guardian of such child. If you
        do not qualify under these terms, do not use the Site or Services.
        Membership in the Services is void where prohibited by applicable law,
        and the right to access the Site is revoked in such jurisdictions. By
        using the Site and/or the Services, you represent and warrant that you
        have the right, authority, and capacity to enter into these Terms of Use
        and to abide by all of the terms and conditions set forth herein. The
        Site is administered in the India. and intended for Indian users; any
        use outside of the India is at the user's own risk and users are
        responsible for compliance with any local laws applicable to their use
        of the Services or the Site. Last updated 12-01-2016 Copyright
        Medsway.com © 2023-2024. All Rights Reserved.
      </p>

      {/*  back button */}
      <button
        onClick={handleBackClick}
        className="flex items-center text-blue-800 focus:outline-none mt-4"
      >
        <span className="font-sans text-lg">Go Back</span>
        <RiArrowGoBackFill className="ml-2" size={20} />
      </button>
    </div>
  );
}

export default Terms;
