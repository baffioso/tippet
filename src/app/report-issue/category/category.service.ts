import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  CATEGORIES = [
    {
      name: 'Renhold & Affald',
      image: 'https://discover.rbcroyalbank.com/wp-content/uploads/banner-small-garbage-day_402x-1.jpg'
    },
    {
      name: 'Belysning',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSv0EmYgUPGiUln_RhSUi9Ppzg8bvWBFzNzAw&usqp=CAU'
    },
    {
      name: 'Graffiti',
      image: 'https://s3-eu-west-1.amazonaws.com/ncs-ons10-eu-west-1-159685838580-content-prd/ns2ir_sk1_p/s3fs-public/styles/cf_skf_flexslider/public/Image_cont_1e8a22214550431c9633dc58a35aef02edf0d138.jpeg?NZHN3Ay2xKcv70.iueEDTfAuwy3rKqds&itok=PrSlXlpX'
    }
  ];

  SWECO = [{"id":"4d8085ce-a3ba-4ad2-9618-c6b307a328d9","text":"Belysning","elementTypes":[{"id":"3dcdc737-a1ca-46ee-b806-53e949300b2c","text":"Belysningsmast","categories":[{"id":"2be5833a-b9d7-46c6-90fa-16bfb2a59843","text":"Påkørt"}]},{"id":"fc0f2208-66d3-440c-938d-daecf573c86d","text":"Fodgængerskilt","categories":[{"id":"898e8895-2593-43f9-a52c-5651cddfe634","text":"Mangler lys"}]},{"id":"65687dca-a1eb-4130-a523-1dd19d421940","text":"Gadelys","categories":[{"id":"38efbc34-53e4-4cc8-9afe-dc49b8221c08","text":"Blinker"},{"id":"e4e9271f-9106-4d05-a07a-8a8d3403be4b","text":"Blænder"},{"id":"57c1a04e-3674-4e19-9f75-335966cec35a","text":"Lyser periodisk"},{"id":"ae114253-1302-4152-9839-f48626a79d84","text":"Slukket - enkelte lamper"},{"id":"7b329d8a-1ac1-40f2-8a49-0412980a1389","text":"Slukket - hel eller stor del af vej/område"},{"id":"105e830d-3724-4cc1-8f1e-6afcee5b6cca","text":"Tændt om dagen"}]},{"id":"74c80eb4-99b6-4650-a02a-ad85680dd773","text":"Tunnel","categories":[{"id":"085dd146-21d0-4eb1-9725-759db7901294","text":"Lys i stykker"}]}]},{"id":"81078718-d060-452c-bb6f-0c6c70e0c6b5","text":"Bro, Gangtunnel & Bolværk","elementTypes":[{"id":"0ace612d-fa1c-4ac9-b781-82aa0d0eb41a","text":"Bro","categories":[{"id":"3b052a2c-353a-41c0-bfd0-de37b4f7b94e","text":"Glat overflade"},{"id":"cf08027a-90b3-42f3-8357-b2cdde06878d","text":"Ødelagt rækværk"}]},{"id":"7d5b2a8e-2224-4669-95e2-d3d94640f9ac","text":"Belægning","categories":[{"id":"185f71ef-b292-4a35-b563-adc16e97487f","text":"Hul"}]},{"id":"0067cd36-400e-4e19-aa28-d5a921c337c4","text":"Rist","categories":[{"id":"042bc33a-fecb-45b4-8bc0-5faf5f12050d","text":"Stoppet"}]},{"id":"bec5150d-8f21-4454-841a-93316948112b","text":"Trappe","categories":[{"id":"788029c7-71cd-4252-a43d-d2917c5b3236","text":"Ødelagt"}]}]},{"id":"58f9430f-fc11-4ad3-997d-3f615a697eaf","text":"Byinventar & Byudstyr","elementTypes":[{"id":"5118b404-516c-467f-a2b4-77f8e030d430","text":"Bænk","categories":[{"id":"0c7f478c-cfa3-4dfc-8a8a-4628b70cccea","text":"Stjålet"},{"id":"2719a3f0-58b5-4c1c-aa10-6be3cde89d1e","text":"Ødelagt"}]},{"id":"d8ac307b-37cb-4da7-ad37-f4f327a5e67b","text":"Affaldskurv","categories":[{"id":"f819732b-01e8-4277-80e4-bb31be175158","text":"Manglende låg"},{"id":"d3911b77-db6b-4dbf-9530-5e47bf0feebf","text":"Ødelagt"}]},{"id":"f4988082-4d32-4aef-8c23-74aa365b3680","text":"Beplantning","categories":[{"id":"4f7ef501-a44d-4318-965c-a32f571c7653","text":"Dækker for skilt"}]},{"id":"21ab4940-6350-4cfa-923a-2e75f854dd30","text":"Bomme/Stele/Pullert","categories":[{"id":"a757fd9e-e7a0-4b13-b084-af9fa4a1a67a","text":"Mangler"},{"id":"e227eae7-5fec-47ba-8fb8-2479e7650060","text":"Ødelagt"}]},{"id":"2ef5e457-2c45-49c2-b87c-ca3eb709a9ca","text":"Buslæskærm","categories":[{"id":"89df7826-116b-4360-b885-44649e0e8c33","text":"Andet"},{"id":"22b49030-2b73-4baa-af28-455c105e7682","text":"Bør rengøres"},{"id":"820c0617-a681-466a-b690-009a57e5e551","text":"Hærværk"},{"id":"8a5db55f-8d96-4e4f-a72d-00bb5f6c70e3","text":"Løst glas"},{"id":"1e097fbc-91ea-4871-b66d-028a38a2c9f0","text":"Manglende lys i læskærm"},{"id":"50b6d7f7-58a9-43fe-b5ea-89658bf1b640","text":"Mangler plakat"},{"id":"e615f887-ee1e-4819-8ae0-f39e20bc631e","text":"Slukket skærm med afgangstider"},{"id":"d7a054fe-be84-4acb-99a7-5ca81357633c","text":"Smadret glas"}]},{"id":"3fe941ef-c4dd-46b5-81cc-af6f588ea7cb","text":"Cykelstativ","categories":[{"id":"7c937dcb-6e8f-4b88-85e8-3c59989c6fc7","text":"Ødelagt"}]},{"id":"1fd586fb-9c9e-40cd-a094-6ab00c0e46e5","text":"Drikkepost","categories":[{"id":"bb84a892-0782-4c4c-8f9c-3849176186ba","text":"Virker ikke"}]},{"id":"c5577566-5a22-4ae5-ba09-0d5de23b1886","text":"Gadenavneskilt","categories":[{"id":"3c834b23-b97e-4700-8dd9-673f46a9b344","text":"Mangler"},{"id":"9446c879-ec24-4846-bd0c-c785889a4655","text":"Ødelagt"}]},{"id":"f469932e-3169-41bb-927e-68924f9876a8","text":"Grill","categories":[{"id":"6c899f9a-73a0-4695-8806-5fe8532518d3","text":"Ødelagt"}]},{"id":"dc82e960-1fc6-473b-89be-1013523f5b8c","text":"Hegn","categories":[{"id":"f52f60da-ec66-4d75-a550-3b2b1bb7e73a","text":"Ødelagt"}]},{"id":"cc175591-40b0-4c2c-85c8-561c0c16e451","text":"Legeredskab","categories":[{"id":"dd0a134b-366a-40d0-8f8b-a8cbb1edf686","text":"Ødelagt"}]},{"id":"472712de-6cdd-4b8a-bcc3-404cbe62bd63","text":"Låge","categories":[{"id":"b4d6ac0c-41d0-4e23-be41-ab074dae3538","text":"Ødelagt"}]},{"id":"e13bbfab-cc74-432f-9e74-e318d4a1c1a6","text":"Plakatsøjle","categories":[{"id":"0e5a5676-08e5-4ec0-9229-6e4612e22bc0","text":"Andet"},{"id":"dbf112ee-13b1-4fda-9300-5811323a33bc","text":"Bør rengøres"},{"id":"d7a254e4-bbff-49bb-af2d-7bee7cb25a03","text":"Hærværk"},{"id":"f2f6feb8-7712-4977-8734-5c4c66a3d079","text":"Klistermærke"}]},{"id":"2f98e850-708f-4bcb-b8a8-9e6fd857cf87","text":"Reklamestander","categories":[{"id":"802dceb3-3a9f-4e3a-930e-21c697173b81","text":"Andet"},{"id":"8ed0d53b-c5c7-4ad2-ad6b-32a4ab8f8207","text":"Bør rengøres"},{"id":"632fb4b3-2d10-4403-bcf9-7e7c26ab8759","text":"Graffiti"},{"id":"9b164be6-0f04-41d1-8988-3bac8b5fbd5b","text":"Hærværk"},{"id":"b3aa7733-3739-4305-8a03-3f4a50544a30","text":"Klistermærke"},{"id":"f5db934e-085e-47a7-855e-9b844b4f4d7d","text":"Manglende lys"},{"id":"2c748797-0fa9-49f0-94b9-c9a5872e9259","text":"Mangler plakat"},{"id":"91253d19-d1bd-4a4f-8448-c67604ac4af2","text":"Smadret glas"}]},{"id":"dba8e8c5-118f-493e-bd62-b7c7b4971b25","text":"Springvand","categories":[{"id":"24a08e51-b15f-4988-a6a1-7e5915edc95c","text":"Ødelagt"}]},{"id":"a265e923-b684-47b6-bdc1-4d1cb3bdb8a5","text":"Træningsredskab","categories":[{"id":"4d2d434a-958a-4ae6-838c-35ae2252b5f8","text":"Ødelagt"}]}]},{"id":"bad0ea69-fb57-43d1-881c-5aa611fb2804","text":"Cykel/Knallert","elementTypes":[{"id":"b6ea35e5-aca8-4cee-8622-d86f736a5f02","text":"Cykel","categories":[{"id":"a4075238-31fe-4c99-a7f3-1ea5ceba44e9","text":"Efterladt"}]},{"id":"8daff97b-05a1-4036-9e8a-2b471724c0b8","text":"Knallert","categories":[{"id":"06396bb7-b6c3-4a78-8ebd-1fed85b056a5","text":"Efterladt"}]},{"id":"5a2e37a3-84f4-48a1-88f8-a061e6c298b6","text":"Mange cykler","categories":[{"id":"249cd08f-b875-4f7b-b6a8-707edc0aa88e","text":"Efterladt"}]},{"id":"ec97bcd8-d45f-41f0-9107-5ab81751cb9d","text":"Udlejningscykel","categories":[{"id":"4bf034dd-a742-4bbe-a207-d90fd1886989","text":"Parkeret til gene"}]}]},{"id":"75f64a74-833f-4310-af2c-7fae3c7e3950","text":"Dyr","elementTypes":[{"id":"88441bea-ac55-470c-a0f9-538120674fb5","text":"Dyr","categories":[{"id":"d925a04c-33f7-4d3e-a931-aca54f4bd7f8","text":"Død fugl"},{"id":"fb71cd6d-5612-49ac-839f-5f2b387da004","text":"Død kat"},{"id":"7c556a56-8229-40fa-8033-25ed5a77b5bf","text":"Død rotte"},{"id":"fa84ee7b-5200-44e4-ad47-c0ed238e3816","text":"Dødt"},{"id":"d8554d33-19be-4775-ab3e-9d8fa654c501","text":"Tilskadekommet"}]}]},{"id":"dcc4fd5e-d6d2-490e-a043-b8d4431ddeee","text":"Cafémøbler, Reklameskilt & Vareudstilling","elementTypes":[{"id":"1734c47f-2dcc-41cd-84f3-d4546d1faa97","text":"Reklameskilt","categories":[{"id":"87a07205-5261-4d0b-bd0e-2d2bd7b3ea9a","text":"Kan ikke passere"},{"id":"1e0053a1-82d4-4dc4-a267-770c662160f3","text":"Lyser meget skarpt"},{"id":"8e05206f-7be6-4ce7-a3c9-5266a0f20624","text":"Skygger/blokerer for udsyn"}]},{"id":"16e60a16-4423-48a9-9fb2-502730ba31fa","text":"Cafemøbler","categories":[{"id":"7ea2770f-f6c8-48b0-afcf-614b52c2ba88","text":"Kan ikke passere"}]},{"id":"38c5332d-35fe-4b04-ba78-d1b359ec690c","text":"Vareudstilling","categories":[{"id":"a6fc5d54-82a2-4488-817b-9b37e876c3ce","text":"Kan ikke passere"}]}]},{"id":"fbd4eb41-0f9a-4cdf-aa6e-187b23c850cd","text":"Graffiti, Klistermærker & Plakater","elementTypes":[{"id":"d8ac307b-37cb-4da7-ad37-f4f327a5e67b","text":"Affaldskurv","categories":[{"id":"3a54a3f5-8fde-41c3-88e7-7e9d8fde7808","text":"Graffiti"},{"id":"42564c47-af66-4fb2-aa71-3661eadf6f17","text":"Klistermærker"}]},{"id":"6f534611-99ea-4796-9b97-68ef28b89301","text":"Belysning","categories":[{"id":"48584192-8b2b-4dc4-8c1a-6780b4297f19","text":"Graffiti"}]},{"id":"0ace612d-fa1c-4ac9-b781-82aa0d0eb41a","text":"Bro","categories":[{"id":"b1c1bc4f-ceab-4e75-9a21-adc91911c516","text":"Graffiti"},{"id":"bd06a445-6128-4543-b7c8-abe22afd64fa","text":"Klistermærker"}]},{"id":"2ef5e457-2c45-49c2-b87c-ca3eb709a9ca","text":"Buslæskærm","categories":[{"id":"5ab4229f-f684-4c5e-b85e-b68cc5192a81","text":"Graffiti"},{"id":"8483e7a9-241e-4682-81b0-38bfed961664","text":"Klistermærke"}]},{"id":"5cac9560-3587-46fe-a14b-d53572a7e385","text":"Bygning","categories":[{"id":"f3c50b8f-8506-4ded-b94a-b3d6aeea8860","text":"Graffiti"}]},{"id":"5118b404-516c-467f-a2b4-77f8e030d430","text":"Bænk","categories":[{"id":"04330e05-4514-4b01-a225-842fbbd974dd","text":"Graffiti"},{"id":"81088279-408e-4cd7-aa5a-19175ab79250","text":"Klistermærker"}]},{"id":"0e825fc1-dfb3-4e41-a47b-b5a755500b28","text":"Elskab","categories":[{"id":"954e7666-6700-40e6-ac08-3f5bc268969a","text":"Graffiti"},{"id":"ef35f85b-2635-4315-9349-27b50ea56293","text":"Klistermærke"}]},{"id":"cc175591-40b0-4c2c-85c8-561c0c16e451","text":"Legeredskab","categories":[{"id":"c66c7593-0733-4604-b459-20d74afe886c","text":"Graffiti"}]},{"id":"e13bbfab-cc74-432f-9e74-e318d4a1c1a6","text":"Plakatsøjle","categories":[{"id":"c0779beb-9cbb-4018-9501-fc65277f2988","text":"Graffiti"}]},{"id":"235fb925-a227-4fd5-9a85-ebdf0e513d48","text":"Skilt","categories":[{"id":"cf51f9bb-4076-493b-8769-550b0ecda49f","text":"Graffiti"},{"id":"a65a8b02-53ee-4451-8461-6c34a2bdd80d","text":"Klistermærker"}]},{"id":"9cd6acfc-e4da-4036-83d6-5f0d49293e9e","text":"Skulptur/Monument","categories":[{"id":"1bf9ccc6-22a4-424e-8a21-52eec3b674be","text":"Graffiti"},{"id":"cc7fc5c7-2565-4d03-96a5-172471f3f483","text":"Klistermærker"}]},{"id":"9a61b70f-be2e-478b-9c65-1678e18099d2","text":"Toilet","categories":[{"id":"7801d6c0-d034-4b57-98dd-2070b073a292","text":"Graffiti"},{"id":"c029fcfd-3217-4b7d-a8d0-0faf43ec3fc4","text":"Klistermærke"}]},{"id":"74c80eb4-99b6-4650-a02a-ad85680dd773","text":"Tunnel","categories":[{"id":"5ad60608-a68f-4b72-a231-6ce27381acfb","text":"Graffiti"},{"id":"9f1cb6fa-e085-45fd-832a-acb013ee2993","text":"Klistermærke"}]}]},{"id":"276e4ffe-cbd3-44e2-b5c8-d2e3ed278526","text":"Kanyler","elementTypes":[{"id":"39c3a620-9c69-478f-94f8-773ff5eaeb21","text":"Kanyle","categories":[{"id":"c7226e8c-7db5-41d4-b60e-b86afb6e43dc","text":"Henkastet"}]}]},{"id":"04358afe-e04e-4d52-a697-cf02994fa99c","text":"Parkering","elementTypes":[{"id":"ff811c16-56d6-4279-bb7c-6d3113d59171","text":"Bil","categories":[{"id":"d3ab7dcb-66b1-4ec5-9382-6c98d4ac2518","text":"Parkering foran port"},{"id":"f07b870a-afde-4da1-b986-26ab0d799800","text":"Ulovlig parkeret"}]},{"id":"0047cd0a-1035-4e11-bec0-4949004d2fee","text":"Gulmarkering/Servicetrekant","categories":[{"id":"cd3cf0f4-5152-4719-bf0e-1e57cdc0883b","text":"Slidt"}]},{"id":"5475b4b0-8ccc-4011-a0de-1953083f05a4","text":"Trailer","categories":[{"id":"19b66cda-2ade-4764-bba0-43a438686fcb","text":"Parkeret over længere tid"}]}]},{"id":"d3374d3d-a943-4c2a-a422-e665af33c7c5","text":"Renhold & Affald","elementTypes":[{"id":"d8ac307b-37cb-4da7-ad37-f4f327a5e67b","text":"Affaldskurv","categories":[{"id":"14a7cef4-ed70-498e-8a0f-9e552d986987","text":"Affald"},{"id":"9f1b41bd-24f3-4699-98b1-502ece1693fa","text":"Fyldt"},{"id":"f819732b-01e8-4277-80e4-bb31be175158","text":"Manglende låg"},{"id":"d3911b77-db6b-4dbf-9530-5e47bf0feebf","text":"Ødelagt"}]},{"id":"f4988082-4d32-4aef-8c23-74aa365b3680","text":"Beplantning","categories":[{"id":"2862d73b-9758-4d33-991e-8e026d48eb64","text":"Affald"}]},{"id":"7dc613bb-5047-4b6f-8a9b-77d2cd0d8e9b","text":"Cykelsti","categories":[{"id":"17c3cf7e-62f8-45b5-bdd3-d4f17ff89c56","text":"Affald"},{"id":"49c60fd0-8606-478a-b4c7-1ffe0c23c18e","text":"Glasskår"}]},{"id":"82e5ea2d-d63a-45ef-ac46-b793a5ba00f9","text":"Fortov","categories":[{"id":"7cd098ff-aa93-4099-ac9d-63c5fb98d458","text":"Affald"},{"id":"e718a981-094a-40d9-ade2-0a0bb14cb037","text":"Glasskår"},{"id":"e945c159-be1b-48c0-b69a-ab709a20dbdf","text":"Ukrudt"}]},{"id":"3be3cbc1-b7cd-4b54-a4d8-10c4a1b2f274","text":"Glascontainer","categories":[{"id":"33dd939d-c383-4614-8cc2-3423e994c700","text":"Affald"},{"id":"ce822f44-6c56-4790-9aaa-971421beb829","text":"Fyldt"}]},{"id":"fc8861a6-b85c-43b0-beac-45fb9a0a796c","text":"Græs","categories":[{"id":"c1babe64-23bb-46b0-a448-60f8bdfd78b5","text":"Affald"}]},{"id":"89affb04-df92-42b4-934a-e1d873dba53b","text":"Havn/Kanal","categories":[{"id":"ba61bd53-19c1-44db-9353-82ce0c92909d","text":"Affald"}]},{"id":"880db14c-61ed-4ebf-987b-66558e2e4433","text":"Sandkasse","categories":[{"id":"f4513fd6-35d9-4b5c-8f97-d451e33a7753","text":"Affald"}]},{"id":"33956739-b291-40f4-8256-956b80a4b6a6","text":"Sø","categories":[{"id":"615f4511-b7dd-41b9-a28e-2706c4d82792","text":"Affald"}]},{"id":"bec5150d-8f21-4454-841a-93316948112b","text":"Trappe","categories":[{"id":"bdc28b67-e091-4cce-a8a6-4467622bcc7f","text":"Affald"},{"id":"2ce55474-570e-40fa-901e-89847186c528","text":"Glasskår"}]},{"id":"421fa4cb-7cfc-4f63-9269-4aa51edb5f6c","text":"Valgplakat","categories":[{"id":"742673c9-8221-4e62-9da4-2e73e03ec7f8","text":"Henkastet"}]},{"id":"5f4d494f-0ebf-497d-ab15-60b9057b73cc","text":"Vandløb","categories":[{"id":"6d193060-4b6b-4d91-bcf6-4b9c4e5591f5","text":"Affald"}]},{"id":"ecad4b30-62a9-4b13-91bb-20e0fbbca245","text":"Vej","categories":[{"id":"696af66c-45c1-4072-9239-a20b870ba1dc","text":"Affald"},{"id":"09c91df5-f8fb-488b-bbf8-382ba7b34e77","text":"Glasskår"}]}]},{"id":"cbef24bf-7c64-4a19-b1dd-37124d1e16a8","text":"Skilte","elementTypes":[{"id":"1734c47f-2dcc-41cd-84f3-d4546d1faa97","text":"Reklameskilt","categories":[{"id":"87a07205-5261-4d0b-bd0e-2d2bd7b3ea9a","text":"Kan ikke passere"},{"id":"1e0053a1-82d4-4dc4-a267-770c662160f3","text":"Lyser meget skarpt"},{"id":"8e05206f-7be6-4ce7-a3c9-5266a0f20624","text":"Skygger/blokerer for udsyn"}]},{"id":"fc0f2208-66d3-440c-938d-daecf573c86d","text":"Fodgængerskilt","categories":[{"id":"898e8895-2593-43f9-a52c-5651cddfe634","text":"Mangler lys"}]},{"id":"c5577566-5a22-4ae5-ba09-0d5de23b1886","text":"Gadenavneskilt","categories":[{"id":"3c834b23-b97e-4700-8dd9-673f46a9b344","text":"Mangler"},{"id":"9446c879-ec24-4846-bd0c-c785889a4655","text":"Ødelagt"}]},{"id":"235fb925-a227-4fd5-9a85-ebdf0e513d48","text":"Skilt","categories":[{"id":"2a5ac74f-1590-4d14-b1a5-a71d037bc1b5","text":"Beskadiget"},{"id":"cfd03af8-0b98-4dbf-8569-6ce5f970b199","text":"Forkert skiltning"},{"id":"a65a8b02-53ee-4451-8461-6c34a2bdd80d","text":"Klistermærker"},{"id":"9a269d95-c7e7-4ae5-8820-11520470dacf","text":"Mangler"},{"id":"48a65091-c4b8-4c80-b730-892f80493048","text":"Ødelagt"}]}]},{"id":"e3937153-5e28-4342-8662-5fcf4419955f","text":"Toilet","elementTypes":[{"id":"9a61b70f-be2e-478b-9c65-1678e18099d2","text":"Toilet","categories":[{"id":"552772c7-e853-4842-9414-e36a0020e522","text":"Andet"},{"id":"a51f7abf-d3fd-4aff-a2ae-bc74e89b13bc","text":"Beskidt"},{"id":"46bb350d-3ab7-4829-9e03-c61ac0910336","text":"Bør rengøres"},{"id":"9b6fdbea-c333-4b17-a542-09a0b07add96","text":"Defekt nødopkald"},{"id":"0e79dcb5-00d3-4d9f-8467-5d92eef38c36","text":"Defekt vandhane"},{"id":"71b782e9-fa4f-4230-b6a8-07ce24a53d57","text":"Fyldt kanyleboks"},{"id":"6a7f404c-1199-4103-9bc5-7b0d24b45706","text":"Hærværk"},{"id":"70778c31-2111-4b5e-b5bd-aa68f6583115","text":"Kanyle"},{"id":"0bacc15e-5a1e-44c5-8a7e-583498dd919c","text":"Løbende vand"},{"id":"13564d38-06c9-438d-b283-ed0f773b9fca","text":"Manglende lys"},{"id":"28806c87-3e8e-4aa1-a74d-7e1e4ae646f5","text":"Manglende papir"},{"id":"7c7c3170-c1c4-4bf5-bed5-a1228db2d9a1","text":"Manglende sæbe"},{"id":"ad602145-a5e3-4a0d-9266-a1ecd1d99e92","text":"Mangler plakat"},{"id":"92ffb02c-4c92-4265-9b11-203b47f75ce0","text":"Stoppet afløb"},{"id":"8c39a15b-5f15-4b30-ac00-282d53a10506","text":"Sundhedsskadeligt affald"},{"id":"60c8c253-8c9b-4a53-a15b-eabd3af6a3de","text":"Toiletrulleholder defekt"},{"id":"568d116d-3931-4593-b5c1-86ab9eb56981","text":"Toiletsæde defekt"},{"id":"8239ea99-4e94-4bc0-ac76-6b74e149d203","text":"Ude af drift"},{"id":"831de3a9-6183-40df-bdb4-6129fd8cec69","text":"WC defekt"},{"id":"6582435c-bee9-4294-95bd-8d3fe71d3cc9","text":"Ødelagt kanyleboks"}]}]},{"id":"c5db0139-3f70-4616-9f0d-939f57bae41e","text":"Trafiksignal","elementTypes":[{"id":"53502bad-6d40-468c-a6fe-09120e6ac27a","text":"Lydsignal","categories":[{"id":"07391116-4097-4ca3-b70e-f526b5361671","text":"Defekt"},{"id":"81d2b4f2-5620-4a3b-b511-7a51489e8cad","text":"For lav lyd ift. trafik"},{"id":"957ee66f-fd8a-409c-ae67-4770ee92a5d2","text":"Ingen Lyd"},{"id":"e4fa05b5-e334-4d4e-821a-0ac6fee6d7e1","text":"Upræcis synkronisering af lyd- og lysfyr"}]},{"id":"7782347a-6485-41d1-a058-37b087473757","text":"Trafiklys","categories":[{"id":"0f4ec903-b019-48f9-a16c-a504a95ab07a","text":"Lyser forkert vej"},{"id":"1372b978-452a-467a-9805-9a3272575e8b","text":"Lyser ikke"},{"id":"f56cb542-936e-4679-9e2c-7989adc5a181","text":"Pære defekt"}]},{"id":"31258d74-a21d-43e6-89b2-ce2885800b6c","text":"Trafiklysmaste","categories":[{"id":"06eb2acf-cd6c-473a-a1ca-dff665d1a598","text":"Påkørt"}]}]},{"id":"57a9959f-27e2-43ae-ab4a-19d4f8ba26ee","text":"Træ, Buske & Græs","elementTypes":[{"id":"f4988082-4d32-4aef-8c23-74aa365b3680","text":"Beplantning","categories":[{"id":"7087c649-8555-4000-89bf-d032559070da","text":"Beplantning hindrer udsyn på vej"},{"id":"edae409a-624f-464f-b502-538bc09b0f93","text":"Blokerer cykelsti"},{"id":"fe3bbe3e-3c62-40c3-845b-a390f1fcb141","text":"Blokerer fortov"},{"id":"79bd5523-e30f-4f92-8015-eddbf4b68080","text":"Blokerer sti"},{"id":"f8a569a3-3816-4a0e-be83-b06e3b155983","text":"Blokerer vej"},{"id":"e027b465-b586-48fc-b827-3c357460330f","text":"Glasskår"},{"id":"192fe54b-50bd-47f7-8beb-2f2c1c12a93c","text":"Skygger for gadelys"},{"id":"49057e5d-d282-45ee-8fea-507dd1e24e31","text":"Skygger for skilt"},{"id":"a2ac654e-0d27-4f43-96c9-1f479e93c5fa","text":"Ukrudt"},{"id":"4cecd7c5-0d7c-4e87-94f8-1c8ebdf541ab","text":"Rødder"}]},{"id":"e3d58c70-449b-4bc7-a722-f2880cf88c26","text":"Invasive planter","categories":[{"id":"edc3e152-a9a0-428c-8efb-6fa22e2a821b","text":"Indberetning"}]},{"id":"f8b6a799-28bc-4da0-80ce-dd1fa1bc040c","text":"Træ","categories":[{"id":"14a1fbae-f7a3-4879-b43e-6c9ca357090a","text":"Væltet"},{"id":"b6fe5abd-5a62-41ba-a199-0c6992979032","text":"Sygt"},{"id":"5904497e-aa1a-43b0-8daa-82a1bc53f7ea","text":"Dødt"},{"id":"0b2eb001-fe9e-471a-b7e9-ba89889a70e7","text":"Generer færdsel"}]}]},{"id":"e156aab8-6742-42ca-9eba-6b06f0acf400","text":"Valgplakater","elementTypes":[{"id":"421fa4cb-7cfc-4f63-9269-4aa51edb5f6c","text":"Valgplakat","categories":[{"id":"81090034-616e-4cdb-bf7c-5e2422dee525","text":"Ikke nedtaget"},{"id":"369d47c7-5ace-46e4-a31f-cadb5089412e","text":"Ligger og flyder"},{"id":"d782f8c4-4b46-4350-9e4d-b88fc3fec6f1","text":"Overholder ikke regler"},{"id":"94f16141-86a7-4727-a0f1-6da5ee436542","text":"Til fare for trafikanter"}]}]},{"id":"0f2770ec-b989-40fc-8f80-64e0e95b35ad","text":"Vej, Cykelsti & Fortov","elementTypes":[{"id":"f4988082-4d32-4aef-8c23-74aa365b3680","text":"Beplantning","categories":[{"id":"edae409a-624f-464f-b502-538bc09b0f93","text":"Blokerer cykelsti"},{"id":"fe3bbe3e-3c62-40c3-845b-a390f1fcb141","text":"Blokerer fortov"},{"id":"f8a569a3-3816-4a0e-be83-b06e3b155983","text":"Blokerer vej"},{"id":"4d2e3418-e808-4adf-8989-0863a94b1613","text":"Hindrer udsyn"}]},{"id":"ff811c16-56d6-4279-bb7c-6d3113d59171","text":"Bil","categories":[{"id":"d3ab7dcb-66b1-4ec5-9382-6c98d4ac2518","text":"Parkering foran port"},{"id":"f07b870a-afde-4da1-b986-26ab0d799800","text":"Ulovlig parkeret"}]},{"id":"16e60a16-4423-48a9-9fb2-502730ba31fa","text":"Cafemøbler","categories":[{"id":"7ea2770f-f6c8-48b0-afcf-614b52c2ba88","text":"Kan ikke passere"}]},{"id":"a11e0c88-6170-4168-9afb-76959c88e078","text":"Container","categories":[{"id":"36ae9dce-58e6-4598-83cc-b68e4813eaf9","text":"Placeret uhensigtsmæssigt"}]},{"id":"43f53c36-6e98-41e5-83c3-8d37bdd26ae5","text":"Cykelasfaltrampe","categories":[{"id":"702377ca-a0dd-41f7-9e41-1a41d49b1045","text":"Mangler"}]},{"id":"7dc613bb-5047-4b6f-8a9b-77d2cd0d8e9b","text":"Cykelsti","categories":[{"id":"17c3cf7e-62f8-45b5-bdd3-d4f17ff89c56","text":"Affald"},{"id":"b711122b-c8ae-409d-86c6-be7b6bb71664","text":"Brønddæksel ødelagt"},{"id":"49c60fd0-8606-478a-b4c7-1ffe0c23c18e","text":"Glasskår"},{"id":"e6a2c08e-7596-4192-896d-e6fa83cc3dd2","text":"Hul"},{"id":"26b6c12a-1c29-4d8a-be3e-b6656bae48b8","text":"Lunke"},{"id":"66a6d011-a67c-43bd-a3bd-453b075e3034","text":"Parkeret bil"},{"id":"a8ea1fa4-2522-4c20-b973-64707bd053f2","text":"Rist løs"},{"id":"8db2b902-ba1a-46be-8def-dd50ff576097","text":"Rist stoppet"},{"id":"43950a59-0609-4c80-9f91-8c3d05632eca","text":"Rist ødelagt"},{"id":"b362fe5f-1c75-4538-94b8-fb2493ef7d1f","text":"Striber slidte"}]},{"id":"b4b25154-deb2-4649-8186-1bb5a777db44","text":"Flise","categories":[{"id":"47c54e25-f522-446e-9be9-8e5b0b14eb95","text":"Høj kant på 2-3 cm mellem fliser"},{"id":"c5634b13-ee02-4200-8695-315c8745b885","text":"Knækket"},{"id":"9abf7491-d763-44ed-83b6-3c5f82362a73","text":"Løs"},{"id":"4dccf715-3909-4c30-8a19-d3d9bf0df482","text":"Mangler"},{"id":"acbfb9df-a1d3-4ffd-9fb5-da0630b31205","text":"Skæv"},{"id":"43dc5590-aeb2-4fe4-9728-a8d5c4bb6a71","text":"Vipper"}]},{"id":"82e5ea2d-d63a-45ef-ac46-b793a5ba00f9","text":"Fortov","categories":[{"id":"da67160c-0b8a-4959-bc31-d4a0d9ef3908","text":"Brosten løse"},{"id":"9899598e-9775-449f-ba35-77cbb348bf03","text":"Brosten mangler"},{"id":"0be72e62-f206-48c4-8510-24caf95ecb3e","text":"Brønddæksel ødelagt"},{"id":"00541da2-643e-4e14-beb5-40188c3330b0","text":"Flise, løs eller manglende"},{"id":"75e6c7f5-8460-43eb-b05c-470a8d86e40e","text":"Hul"},{"id":"a3843da3-523d-493a-9849-d4d32b5372b0","text":"Parkeret bil"},{"id":"c100f2fc-6fb7-4d2a-916b-755362742ca1","text":"Rist løs"},{"id":"f282ac7c-fb15-4fa9-8cfb-6f6e9ab41278","text":"Rist ødelagt"}]},{"id":"1734c47f-2dcc-41cd-84f3-d4546d1faa97","text":"Reklameskilt","categories":[{"id":"87a07205-5261-4d0b-bd0e-2d2bd7b3ea9a","text":"Kan ikke passere"}]},{"id":"0067cd36-400e-4e19-aa28-d5a921c337c4","text":"Rist","categories":[{"id":"042bc33a-fecb-45b4-8bc0-5faf5f12050d","text":"Stoppet"},{"id":"575c1d72-43ec-4114-be41-eab70cf726f9","text":"Ødelagt"}]},{"id":"c611e816-ab68-4b03-a373-aaefc0b855b2","text":"Skur","categories":[{"id":"b319a945-00bf-429f-a6c6-601174983532","text":"Placeret uhensigtsmæssigt"}]},{"id":"36cde67a-62af-4e55-a8f3-d16ec1744652","text":"Stillads","categories":[{"id":"b51fd5df-6286-42df-abde-061406a083f8","text":"Til gene for færdslen"}]},{"id":"38c5332d-35fe-4b04-ba78-d1b359ec690c","text":"Vareudstilling","categories":[{"id":"a6fc5d54-82a2-4488-817b-9b37e876c3ce","text":"Kan ikke passere"}]},{"id":"ecad4b30-62a9-4b13-91bb-20e0fbbca245","text":"Vej","categories":[{"id":"696af66c-45c1-4072-9239-a20b870ba1dc","text":"Affald"},{"id":"5948ae20-b795-4b23-9166-1e0a42ebb16f","text":"Brønddæksel larmer"},{"id":"23e44b58-7b50-4e62-9483-67d311764754","text":"Brønddæksel ødelagt"},{"id":"09c91df5-f8fb-488b-bbf8-382ba7b34e77","text":"Glasskår"},{"id":"43198633-9d35-4996-9608-02c233ec5358","text":"Hul"},{"id":"25b26e96-5120-47e2-926a-6aed79864a2a","text":"Lunke"},{"id":"c02eae13-d545-4619-a695-68fc822a5d1b","text":"Rist stoppet"},{"id":"d7445606-57b6-4218-8c34-d3be38dd36b2","text":"Rist ødelagt"},{"id":"4b9db00d-3f89-4716-9d1e-fd0f60abc13e","text":"Striber slidte"},{"id":"d6395028-2ba0-4b1b-a9db-8578bfccd95e","text":"Ujævn"}]},{"id":"800d9358-500d-4724-874b-02941c7ec446","text":"Vejarbejde","categories":[{"id":"8eef317f-d985-434c-a2ef-a07a35dd3d04","text":"Beskadiget afspærring"},{"id":"d935d3d0-fbbb-458b-9a5f-9c2c08fa00d8","text":"Beskadiget skilt"},{"id":"0dc739c5-832f-4ef0-a43e-0a6e6a75f92f","text":"Mangelfuld afspærring"},{"id":"3223ec21-15c6-4a2b-bd29-c4da9273be1c","text":"Mangelfuld skiltning"},{"id":"25851e2e-425e-43d1-9a79-b3bf4ac9a91a","text":"Manglende oprydning"}]}]},{"id":"80da5142-40f8-4ad2-8528-4687b61f05bf","text":"Udlejningscykler og el-løbehjul","elementTypes":[{"id":"ec97bcd8-d45f-41f0-9107-5ab81751cb9d","text":"Udlejningscykel","categories":[{"id":"4bf034dd-a742-4bbe-a207-d90fd1886989","text":"Parkeret til gene"}]},{"id":"217dee9b-51b4-48bc-8ab2-ab8cad80a27a","text":"El-Løbehjul","categories":[{"id":"8b965285-24ec-4bda-adbe-0d9b01c0cce3","text":"Parkeret til gene"}]}]},{"id":"879d7b99-4232-40fd-848e-fe9e999379f0","text":"Sne & Is","elementTypes":[{"id":"7dc613bb-5047-4b6f-8a9b-77d2cd0d8e9b","text":"Cykelsti","categories":[{"id":"3f170df6-cd34-4cae-836e-a804f3f7f580","text":"Manglende saltning"},{"id":"b74c2e97-5be2-4860-9ffc-6a19da765db2","text":"Manglende snerydning"},{"id":"a29023b1-01a1-4199-a410-a792c90e672f","text":"Snebunke"}]},{"id":"a3485d39-2aa1-484f-b3b1-fd5a7a838580","text":"Fodgængerfelt","categories":[{"id":"14870f07-49b5-4db7-9b22-4a0946edbd00","text":"Manglende saltning"},{"id":"ece30e91-b19e-4527-a76a-2daf180cd291","text":"Manglende snerydning"},{"id":"340535a6-a0c3-4ba3-b6d0-389adc738f49","text":"Snebunke"}]},{"id":"82e5ea2d-d63a-45ef-ac46-b793a5ba00f9","text":"Fortov","categories":[{"id":"c7063261-0321-43ad-9be3-4b6ac221ae01","text":"Manglende saltning"},{"id":"c7ca85e5-9d3f-4c5e-9461-36ea471b8ee3","text":"Manglende snerydning"},{"id":"d3d28f5f-9b33-4b55-b1a8-2705d88b1bfa","text":"Snebunke"}]},{"id":"605d4eae-7854-46f6-91e8-b8bd9d0dd1fb","text":"Tagryg/Hustag","categories":[{"id":"012870ed-28d5-4ecf-b55b-56ba9a149c60","text":"Fare for nedstyrtning af sne"},{"id":"a3d88f25-1976-4c37-9f36-1e4fae8358d2","text":"Farlige istapper"}]},{"id":"ecad4b30-62a9-4b13-91bb-20e0fbbca245","text":"Vej","categories":[{"id":"2f1f64e5-8760-4b65-9306-e36b12262524","text":"Manglende saltning"},{"id":"eb63cb7a-de3e-4738-8260-253679e288ef","text":"Manglende snerydning"},{"id":"45772546-d90b-4181-b895-bfe901e80b8b","text":"Snebunke"}]}]}]
}
