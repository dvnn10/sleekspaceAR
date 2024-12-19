// Import existing product models
import sheenchair from "../assets/models/sheenchair.glb";
import ioschair from "../assets/models/sheenchair.usdz";
import painting from "../assets/models/Painting.glb";
import iospainting from "../assets/models/Painting.usdz";
import car from "../assets/models/car.glb";
import ioscar from "../assets/models/car.usdz";
import car1 from "../assets/models/Car1.glb";
import ioscar1 from "../assets/models/Car1.usdz";
import OfficeChair from "../assets/models/OfficeChair.glb";
import OfficeChairUsdz from "../assets/models/OfficeChair.usdz";
import pot from "../assets/models/pot.glb";
import potUsdz from "../assets/models/pot.usdz";

// Import Bedroom products
import bedsideTable from "../assets/models/jonah_bedside_table_oak_and_brass.glb";
import iosBedsideTable from "../assets/models/Jonah_Bedside_Table_Oak_and_Brass.usdz";
import stool from "../assets/models/stool_301120 (3).glb";
import iosStool from "../assets/models/stool_301120.usdz";

// Import Living Room products
import schoolDesk from "../assets/models/school_desk.glb";
import iosSchoolDesk from "../assets/models/School_Desk.usdz";
import storageBed from "../assets/models/matryoshka_storage_bed_white.glb";
import iosStorageBed from "../assets/models/Matryoshka_Storage_Bed_White.usdz";
import tvShelf from "../assets/models/simple_tv_shelf_210cm.glb";
import iosTvShelf from "../assets/models/Simple_TV_Shelf_210cm.usdz";

// Import Decor products
import windowBlinds from "../assets/models/window_blinds_low_poly_3d_model.glb";
import iosWindowBlinds from "../assets/models/Window_Blinds_Low_poly_3D_model.usdz";
import persianCarpet from "../assets/models/persian_malayer_carpet.glb";
import iosPersianCarpet from "../assets/models/Persian_Malayer_Carpet.usdz";
import wallClock from "../assets/models/wall_clock_old.glb";
import iosWallClock from "../assets/models/Wall_clock_old.usdz";

import sofa from "../assets/models/sofa_48.glb";
import iosSofa from "../assets/models/Sofa_48.usdz";

// Import Office products
import officePhone from "../assets/models/office_phone.glb";
import iosOfficePhone from "../assets/models/Office_Phone.usdz";
import officeTable from "../assets/models/office_table.glb";
import iosOfficeTable from "../assets/models/Office_Table.usdz";
import pencilHolder from "../assets/models/pens_with_pencil_holder_-_desk_props.glb";
import iosPencilHolder from "../assets/models/Pens_with_Pencil_holder_-_desk_props.usdz";
import simpleOfficeTable from "../assets/models/simple_office_table.glb";
import iosSimpleOfficeTable from "../assets/models/Simple_Office_Table.usdz";
import officeBin from "../assets/models/office_bin.glb";
import iosOfficeBin from "../assets/models/Office_Bin.usdz";

const productItems = [
  // Existing products
  { id: 1, name: "Sheen Chair", modelSrc: sheenchair, iOSSrc: ioschair, category: "Bedroom", color: "Orange", price: 2500 },
  { id: 2, name: "Office Chair", modelSrc: OfficeChair, iOSSrc: OfficeChairUsdz, category: "Office", color: "Black", price: 3500 },
  { id: 3, name: "Pot", modelSrc: pot, iOSSrc: potUsdz, category: "Decor", color: "Red", price: 1000 },
  { id: 4, name: "Painting", modelSrc: painting, iOSSrc: iospainting, category: "Living Room", color: "Brown", price: 2000 },
  { id: 5, name: "Car", modelSrc: car, iOSSrc: ioscar, category: "Bedroom", color: "Blue", price: 5000 },
  { id: 6, name: "Sport Car", modelSrc: car1, iOSSrc: ioscar1, category: "Living Room", color: "Red", price: 7500 },
  { id: 7, name: "Bedside Table", modelSrc: bedsideTable, iOSSrc: iosBedsideTable, category: "Bedroom", color: "Oak & Brass", price: 3000 },
  { id: 8, name: "Stool", modelSrc: stool, iOSSrc: iosStool, category: "Bedroom", color: "Brown", price: 1500 },

  // New Office products
  { id: 9, name: "Office Phone", modelSrc: officePhone, iOSSrc: iosOfficePhone, category: "Office", color: "Grey", price: 1200 },
  { id: 10, name: "Office Table", modelSrc: officeTable, iOSSrc: iosOfficeTable, category: "Office", color: "Brown", price: 6000 },
  { id: 11, name: "Pencil Holder", modelSrc: pencilHolder, iOSSrc: iosPencilHolder, category: "Office", color: "Wooden", price: 800 },
  { id: 12, name: "Simple Office Table", modelSrc: simpleOfficeTable, iOSSrc: iosSimpleOfficeTable, category: "Office", color: "Black", price: 4000 },
  { id: 13, name: "Office Bin", modelSrc: officeBin, iOSSrc: iosOfficeBin, category: "Office", color: "White", price: 500 },

  // New Decor products
  { id: 14, name: "Window Blinds", modelSrc: windowBlinds, iOSSrc: iosWindowBlinds, category: "Decor", color: "White", price: 1800 },
  { id: 15, name: "Persian Carpet", modelSrc: persianCarpet, iOSSrc: iosPersianCarpet, category: "Decor", color: "Multicolor", price: 6000 },
  { id: 16, name: "Wall Clock", modelSrc: wallClock, iOSSrc: iosWallClock, category: "Decor", color: "Brown", price: 1500 },
  { id: 17, name: "Sofa 48", modelSrc: sofa, iOSSrc: iosSofa, category: "Decor", color: "Grey", price: 8000 },
];

export default productItems;