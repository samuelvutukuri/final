## Linguapal: Language Learning Platform

### **Overview**
Linguapal is an interactive language learning platform that integrates advanced AI models, like **Gemma 2B**, for providing grammar correction, vocabulary enhancement, and conversational AI features. This project uses Docker, Python, and a Node.js-based web interface.

---

### **Prerequisites**
Ensure the following are installed:

1. **Node.js** (with npm or yarn)
2. **Python 3.8+**
3. **Docker and Docker Compose**
4. **Git**

---

### **Getting Started**

1. **Set Up the Project Directory**:
   ```bash
   mkdir Linguapal
   cd Linguapal
   ```

2. **Clone the Repository**:
   ```bash
   git clone git@github.com:xxxx .
   ```

3. **Install Node.js Dependencies**:
   ```bash
   npm install
   ```

4. **Start Docker Services**:
   ```bash
   docker-compose up
   ```

   - Verify that the **Ollama** service is running in the Docker container.

5. **Run the Development Server**:
   ```bash
   npm run dev
   ```

---

### **Usage**

1. **Access the Platform**:
   - Open [http://localhost:5000](http://localhost:5000) to create an account or log in.

2. **Select and Pull the Model**:
   - Navigate to the **Model Selection** section.
   - Search for **Gemma 2B**.
   - Click "Pull \"gemma:2b\" from Ollama.com" to download the model.

3. **Interact with the Model**:
   - Open [http://localhost:3000](http://localhost:3000) to access the language learning features.
   - Use grammar correction, vocabulary suggestions, or conversational features.

---

### **Results Example**
Below are sample inputs and the corresponding corrected outputs:

| **Input Sentence**           | **Corrected Sentence**         |
|-------------------------------|---------------------------------|
| I goed to the park.           | I went to the park.            |
| He don't like apples.         | He doesn't like apples.        |
| She are my best friend.       | She is my best friend.         |
| We was playing football.      | We were playing football.      |
| They has a car.               | They have a car.               |

---

### **Additional Notes**
- Ensure Docker has sufficient memory and CPU resources allocated for running large models.
- For troubleshooting, check Docker logs:
  ```bash
  docker logs <container_id>
  ```
- Use [Google Colab](https://colab.research.google.com/) for additional fine-tuning if local resources are insufficient.

---
