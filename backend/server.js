const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Set up Multer for handling file uploads in memory (MVP demo)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Mock Database for Diseases
const MOCK_DISEASES = [
  {
    disease_name: "Maize Leaf Blight",
    confidence: 0.87,
    severity: "High",
    urgency: "Immediate",
    treatment: [
      "Apply fungicide within 24 hours",
      "Remove infected leaves to prevent spread",
      "Ensure proper plant spacing for air circulation"
    ],
    treatment_cost_kes: 2000,
    yield_loss_percent: 40,
    financial_loss_kes: 12000,
    market_price_per_kg: 50,
    buyers: ["Local Cooperative", "Nairobi Fresh Market"]
  },
  {
    disease_name: "Tomato Late Blight",
    confidence: 0.92,
    severity: "High",
    urgency: "Immediate",
    treatment: [
      "Apply copper-based fungicide immediately",
      "Destroy heavily infected plants",
      "Avoid overhead watering"
    ],
    treatment_cost_kes: 1500,
    yield_loss_percent: 60,
    financial_loss_kes: 25000,
    market_price_per_kg: 80,
    buyers: ["City Groceries", "Regional Processor"]
  },
  {
    disease_name: "Healthy Crop",
    confidence: 0.98,
    severity: "Low",
    urgency: "Monitor",
    treatment: [
      "Maintain current watering schedule",
      "Apply standard fertilizer as planned"
    ],
    treatment_cost_kes: 0,
    yield_loss_percent: 0,
    financial_loss_kes: 0,
    market_price_per_kg: 55,
    buyers: ["Local Market", "Export Agent"]
  }
];

// API Endpoint for AI Detection
app.post('/api/detect', upload.single('image'), (req, res) => {
  // We simulate AI processing delay to make it feel real
  setTimeout(() => {
    try {
      // In a real app, we would send req.file.buffer to a model API
      // Here we just pick a mock response based on filename or randomly
      const filename = req.file ? req.file.originalname.toLowerCase() : '';
      
      let responseData = MOCK_DISEASES[0]; // Default to Maize Blight
      
      if (filename.includes('tomato')) {
        responseData = MOCK_DISEASES[1];
      } else if (filename.includes('healthy')) {
        responseData = MOCK_DISEASES[2];
      } else {
        // Randomly select one if not explicitly named for variation
        responseData = MOCK_DISEASES[Math.floor(Math.random() * MOCK_DISEASES.length)];
      }

      res.status(200).json(responseData);
    } catch (error) {
      console.error("Error processing image:", error);
      res.status(500).json({ error: "Failed to process image" });
    }
  }, 1500); // 1.5 second simulated processing delay
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'FarmGuard AI Backend is running' });
});

app.listen(PORT, () => {
  console.log(`FarmGuard AI Server running on port ${PORT}`);
});
