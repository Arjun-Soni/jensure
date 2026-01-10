interface Specification {
  headers: string[]
  rows: string[][]
}

interface Variant {
  name: string
  description: string
  specifications?: Specification
  image?: string
}

interface Product {
  name: string
  series: string
  tagline: string
  image: string
  variants: Variant[]
  commonFeatures: string[]
}

interface ProductData {
  [key: string]: Product
}

export const productData: ProductData = {
  "iv-cannula": {
    name: "IV Cannula",
    series: "JENFLON SERIES",
    tagline: "Precision IV access with optimal flow rates",
    image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENFLON.jpeg",
    variants: [
      {
        name: "JENFLON",
        image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENFLON.jpeg",
        description:
          "IV cannula with port and wings. Features tapered FEP radiopaque catheter for easy insertion with optimal flow rate. Flexible wings ensure secure insertion and patient comfort.",
        specifications: {
          headers: ["Size", "Color", "Catheter OD (mm)", "Length (mm)", "Flow Rate (ml/min)"],
          rows: [
            ["14G", "Orange", "2.2", "45", "270"],
            ["16G", "Grey", "1.8", "45", "200"],
            ["17G", "White", "1.5", "45", "125"],
            ["18G", "Green", "1.3", "45", "90"],
            ["20G", "Pink", "1.1", "32", "55"],
            ["22G", "Blue", "0.9", "25", "36"],
            ["24G", "Yellow", "0.7", "19", "18"],
            ["26G", "Violet", "0.6", "19", "13"],
          ],
        },
      },
      {
        name: "JENICAN",
        image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENICAN.jpeg",
        description:
          "IV cannula with wings, without port. Designed for secure venous access with flexible wings for patient comfort. Available in multiple gauge sizes for various clinical applications.",
        specifications: {
          headers: ["Size", "Color", "Catheter OD (mm)", "Length (mm)", "Flow Rate (ml/min)"],
          rows: [
            ["14G", "Orange", "2.2", "45", "270"],
            ["16G", "Grey", "1.8", "45", "200"],
            ["18G", "Green", "1.3", "45", "90"],
            ["20G", "Pink", "1.1", "32", "55"],
            ["22G", "Blue", "0.9", "25", "36"],
            ["24G", "Yellow", "0.7", "19", "18"],
            ["26G", "Violet", "0.6", "19", "13"],
          ],
        },
      },
      {
        name: "JENINEO",
        image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENINEO.jpeg",
        description:
          "IV cannula without port, featuring small wings for neonatal and pediatric applications. Ultra-precise design ensures minimal trauma during insertion while maintaining optimal flow characteristics.",
        specifications: {
          headers: ["Size", "Color", "Catheter OD (mm)", "Length (mm)", "Flow Rate (ml/min)"],
          rows: [
            ["24G", "Yellow", "0.7", "19", "18"],
            ["26G", "Violet", "0.6", "19", "13"],
          ],
        },
      },
    ],
    commonFeatures: [
      "Tapered FEP radiopaque catheter for easy insertion with optimal flow rate",
      "Flexible wings for secure insertion and patient comfort",
      "Biocompatible materials ensuring patient safety",
      "Injection port with non-return silicon valve (JENFLON variant)",
      "Transparent flashback chamber for immediate blood return confirmation",
      "Color-coded for easy gauge identification",
    ],
  },
  "3-way-stopcock": {
    name: "3-Way Stop Cock",
    series: "JENWAY SERIES",
    tagline: "Reliable flow control for infusion therapy",
    image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENWAY.jpeg",
    variants: [
      {
        name: "JENWAY",
        image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENWAY.jpeg",
        description:
          "Standard 3-way stopcock with transparent channel for visual flow monitoring. Features arrow indication for flow direction and rotating male/female luer connectors for versatile positioning.",
      },
      {
        name: "JENWAY PRO",
        image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENWAY%20PRO.jpeg",
        description:
          "Professional-grade 3-way stopcock with enhanced durability and precision flow control. Designed for high-pressure applications up to 4.5 bar (65 psi).",
      },
      {
        name: "JENWAY CLICK",
        image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENWAY%20CLICK.jpeg",
        description:
          "3-way stopcock with audible click mechanism for positive position confirmation. Ensures accurate flow direction setting in critical care environments.",
      },
      {
        name: "JENWAY WITH EXTENSION LINE",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENWAY%20WITH%20EXTENSION%20LINE.jpeg",
        description:
          "Integrated 3-way stopcock with extension line for convenient IV access. Combines flow control and line extension in a single sterile package.",
      },
    ],
    commonFeatures: [
      "Transparent channel for visual flow monitoring",
      "Arrow indication for clear flow direction",
      "Pressure rating up to 4.5 bar (65 psi)",
      "Rotating male luer and female luer connectors",
      "Smooth rotation mechanism for easy operation",
      "Sterile, single-use design",
    ],
  },
  "extension-line": {
    name: "Extension Line",
    series: "JENLINE SERIES",
    tagline: "Flexible extension solutions for IV therapy",
    image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENLINE%20HIGH%20PRESSURE.jpeg",
    variants: [
      {
        name: "High Pressure",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENLINE%20HIGH%20PRESSURE.jpeg",
        description:
          "High-pressure extension line designed for applications requiring enhanced pressure resistance. Suitable for contrast media injection and high-flow infusion therapy.",
      },
      {
        name: "PVC-Free High Pressure (Coiled)",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENLINE%20PVC-Free%20High%20Pressure%20(Coiled).jpeg",
        description:
          "PVC-free coiled extension line for high-pressure applications. Environmentally friendly design with excellent kink resistance and memory retention.",
      },
      {
        name: "Low Pressure",
        image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENLINE%20LOW%20PRESSURE.jpeg",
        description:
          "Standard low-pressure extension line for general IV therapy. Flexible tubing ensures patient comfort while maintaining reliable fluid delivery.",
      },
    ],
    commonFeatures: [
      "Tube length options: 25–200 cm",
      "Male luer lock at one end & female luer lock at the other",
      "Kink-resistant tubing design",
      "Transparent for visual flow monitoring",
      "Sterile, single-use packaging",
      "Compatible with standard IV systems",
    ],
  },
  "urine-collection-bag": {
    name: "Urine Collection Bag",
    series: "JENURO SERIES",
    tagline: "Hygienic urine collection systems",
    image:
      "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENURO%20With%20T-Type%20Bottom%20Outlet.jpeg",
    variants: [
      {
        name: "Premium",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENURO%20With%20T-Type%20Bottom%20Outlet.jpeg",
        description:
          "Premium urine collection bag with anti-reflux valve and precise volume markings. Features molded hanger for easy bedside mounting and secure drainage system.",
      },
      {
        name: "With T-Type Bottom Outlet",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/UPD%20JENURO%20With%20Measured%20Volume%20Chamber.jpeg",
        description:
          "Urine collection bag featuring T-type bottom outlet for convenient drainage. Designed for easy emptying without disconnection from the catheter system.",
      },
      {
        name: "With Measured Volume Chamber",
        image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENURO%20PLATINUM.jpeg",
        description:
          "Advanced urine collection bag with integrated measured volume chamber for accurate hourly urine output monitoring. Essential for critical care and post-operative patients.",
      },
    ],
    commonFeatures: [
      "Molded hanger for easy handling and bedside mounting",
      "T-type bottom outlet and side outlet options",
      "Tube length: 90–100 cm",
      "Anti-reflux valve to prevent backflow",
      "Clear volume markings for accurate measurement",
      "Sterile, single-use design",
    ],
  },
  "endotracheal-tube": {
    name: "Endotracheal Tube",
    series: "JENSURE ENDOTRACHEAL TUBE",
    tagline: "Secure airway management solutions",
    image:
      "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/ENDOTRACHEAL%20TUBE%20(CUFFED).jpeg",
    variants: [
      {
        name: "Cuffed",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/ENDOTRACHEAL%20TUBE%20(PLAIN).jpeg",
        description:
          "Cuffed endotracheal tube with high-volume, low-pressure cuff for optimal tracheal seal. Thermo-sensitive PVC softens at body temperature for enhanced patient comfort and reduced trauma.",
      },
      {
        name: "Plain",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/ENDOTRACHEAL%20TUBE%20(CUFFED).jpeg",
        description:
          "Plain endotracheal tube without cuff for pediatric and neonatal applications. Features smooth, atraumatic tip design and radio-opaque line for X-ray visualization.",
      },
    ],
    commonFeatures: [
      "Thermo-sensitive PVC softens at body temperature",
      "Universal 15 mm connector for ventilator compatibility",
      "Radio opaque line for X-ray visualization",
      "Murphy eye for continued ventilation if main opening is blocked",
      "Smooth, atraumatic beveled tip",
      "Sterile, single-use packaging",
    ],
  },
  "foley-catheter": {
    name: "Foley Balloon Catheter",
    series: "JENSURE FOLEY BALLOON CATHETER",
    tagline: "Comfortable urinary catheterization",
    image:
      "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/LATEX%20FOLEY%20BALLOON%20CATHETER%202%20WAY%20%26%203%20WAY.jpeg",
    variants: [
      {
        name: "Latex 2-Way",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/LATEX%20FOLEY%20BALLOON%20CATHETER%202%20WAY%20%26%203%20WAY.jpeg",
        description:
          "Standard latex Foley catheter with 2-way design for drainage and balloon inflation. Features smooth, polished eyes for atraumatic insertion and patient comfort.",
        specifications: {
          headers: ["Size (Fr)", "Balloon Capacity (cc)", "Length (mm)"],
          rows: [
            ["12", "5-15", "400"],
            ["14", "5-15", "400"],
            ["16", "5-15", "400"],
            ["18", "5-15", "400"],
            ["20", "5-15", "400"],
            ["22", "30-50", "400"],
            ["24", "30-50", "400"],
          ],
        },
      },
      {
        name: "Latex 3-Way",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/LATEX%20FOLEY%20BALLOON%20CATHETER%202%20WAY%20%26%203%20WAY.jpeg",
        description:
          "Latex Foley catheter with 3-way design for drainage, balloon inflation, and irrigation. Ideal for continuous bladder irrigation in post-operative care.",
        specifications: {
          headers: ["Size (Fr)", "Balloon Capacity (cc)", "Length (mm)"],
          rows: [
            ["18", "5-15", "400"],
            ["20", "5-15", "400"],
            ["22", "30-50", "400"],
            ["24", "30-50", "400"],
          ],
        },
      },
      {
        name: "Silicone 2-Way",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/SILICON%20FOLEY%20BALLOON%20CATHETER%202%20WAY%20%26%203%20WAY.jpeg",
        description:
          "100% silicone Foley catheter with 2-way design for long-term catheterization. Biocompatible silicone reduces tissue irritation and encrustation for extended wear.",
        specifications: {
          headers: ["Size (Fr)", "Balloon Capacity (cc)", "Length (mm)"],
          rows: [
            ["12", "5-15", "400"],
            ["14", "5-15", "400"],
            ["16", "5-15", "400"],
            ["18", "5-15", "400"],
            ["20", "5-15", "400"],
            ["22", "30-50", "400"],
          ],
        },
      },
      {
        name: "Silicone 3-Way",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/SILICON%20FOLEY%20BALLOON%20CATHETER%202%20WAY%20%26%203%20WAY.jpeg",
        description:
          "100% silicone Foley catheter with 3-way design for drainage, balloon inflation, and irrigation. Combines the benefits of silicone biocompatibility with irrigation capability.",
        specifications: {
          headers: ["Size (Fr)", "Balloon Capacity (cc)", "Length (mm)"],
          rows: [
            ["18", "5-15", "400"],
            ["20", "5-15", "400"],
            ["22", "30-50", "400"],
          ],
        },
      },
    ],
    commonFeatures: [
      "Smooth, polished eyes for atraumatic insertion",
      "Symmetrical balloon for optimal retention",
      "Color-coded valve for easy identification",
      "Radio-opaque line for X-ray visualization",
      "Available in multiple French sizes",
      "Sterile, single-use packaging",
    ],
  },
  "iv-infusion-set": {
    name: "Intravenous (IV) Infusion Set",
    series: "JENSURE IV INFUSION SET SERIES",
    tagline: "Precision Flow Delivery with Sterile Infusion Integrity",
    image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/Disposable%20Infusion%20set.jpeg",
    variants: [
      {
        name: "JENDRIP",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/Disposable%20Infusion%20set.jpeg",
        description:
          "Intravenous fluid infusion set designed for infusing drugs or fluids from IV solution bags to IV catheters in use.",
        specifications: {
          headers: [
            "Product Specification",
            "Needle Size",
            "Drops/ml (Distilled Water)",
            "Tubing Length (cm)",
            "Packing",
            "Ref. No.",
            "Qty in Carton (Inner/Outer)",
          ],
          rows: [
            ["With large drip chamber & small clamp", '21G x 1.5"', "20", "150", "Tear Open", "4160021G", "25 / 500"],
            [
              "With large drip chamber & small clamp",
              '21G x 1.5"',
              "20",
              "150",
              "Soft Blister",
              "4160023G",
              "25 / 300",
            ],
            ["With large drip chamber & small clamp", '21G x 1.5"', "20", "150", "Peel Open", "4160025G", "25 / 300"],
            [
              "Without airvent, with small roller clamp",
              '21G x 1.5"',
              "20",
              "150",
              "Ribbon pouch",
              "4160021G",
              "25 / 500",
            ],
          ],
        },
      },
      {
        name: "JENDRIP ALPHA",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/Disposable%20Infusion%20set%20with%20build%20Bacteria%20Barrier%20Air%20vent.jpeg",
        description:
          "Advanced disposable infusion set featuring a bacteria-barrier air vent for stable fluid delivery and contamination control.",
        specifications: {
          headers: [
            "Product Specification",
            "Needle Size",
            "Drops/ml",
            "Tubing Length (cm)",
            "Packing",
            "Ref. No.",
            "Qty in Carton (Inner/Outer)",
          ],
          rows: [
            ["With large drip chamber & small clamp", '21G x 1.5"', "20", "150", "Tear Open", "4170021G", "25 / 500"],
            [
              "With large drip chamber & small clamp",
              '21G x 1.5"',
              "20",
              "150",
              "Soft Blister",
              "4170023G",
              "25 / 300",
            ],
            ["With large drip chamber & small clamp", '21G x 1.5"', "20", "150", "Peel Open", "4170025G", "25 / 300"],
            ["With airvent, small roller clamp", '21G x 1.5"', "20", "150", "Ribbon pouch", "4170021G", "25 / 500"],
          ],
        },
      },
      {
        name: "JENMIC",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/Micro%20drip%20disposable%20infusion%20set.jpeg",
        description: "Precision micro-drip infusion set for controlled delivery of fluids and medications.",
        specifications: {
          headers: [
            "Product Specification",
            "Needle Size",
            "Drops/ml",
            "Tubing Length (cm)",
            "Packing",
            "Ref. No.",
            "Qty in Carton (Inner/Outer)",
          ],
          rows: [
            [
              "Micro drip infusion set without air vent, small roller clamp",
              '23G x 1.5"',
              "60",
              "150",
              "Ribbon pouch",
              "4180015G",
              "25 / 500",
            ],
          ],
        },
      },
      {
        name: "JENMIC ALPHA",
        image:
          "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/Microdrip%20Disposable%20Infusion%20set%20with%20built%20in%20Bacteria%20Barrier.jpeg",
        description:
          "Micro-drip infusion set with integrated bacterial barrier airvent and DEHP-free tubing for contamination-free fluid administration.",
        specifications: {
          headers: [
            "Product Specification",
            "Needle Size",
            "Drops/ml",
            "Tubing Length (cm)",
            "Packing",
            "Ref. No.",
            "Qty in Carton (Inner/Outer)",
          ],
          rows: [
            [
              "Micro drip infusion set with air vent, Y-site, luer lock, DEHP-free tubing",
              '23G x 1.5"',
              "60",
              "150",
              "Paper pouch",
              "4480017G",
              "25 / 500",
            ],
          ],
        },
      },
    ],
    commonFeatures: [
      "Sharp spike for easy insertion into IV bags",
      "Roller clamp for precise flow regulation",
      "Kink-resistant PVC tubing",
      "Self-sealing latex bulb for drug administration",
      "Optional Y-injection site for additional medication access",
      "Disposable, sterile, and non-pyrogenic",
      "Transparent drip chamber for visual flow monitoring",
      "Compatible with standard IV catheter systems",
    ],
  },
}
