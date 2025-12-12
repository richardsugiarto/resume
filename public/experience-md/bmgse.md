# Beyond Media Global (BMG)
![BMG Logo](/experience-md/bmgse/image1.png)
### Introduction
Beyond Media Global (BMG) is a multinational performance media and technology services agency driven by human insights. BMG specializes in advertising and digital marketing services, including SEO. The company primarily serves clients in Hong Kong, Taiwan, China, the United States, Canada, and Australia.

### Required skills
- PHP
- HTML
- CSS
- JavaScript
- MySQL
- Python
- Nginx
- React.js
- CMS frameworks (WordPress, Magento, etc.)
- Third-party site builders (Squarespace, Wix, Shopify, etc.)
- Cloud servers (AWS & Google Cloud VPS)
- Networking
- Server administration

---

### Automated lead qualification
I built and maintain an automated lead-qualification workflow. The image below shows an example of the Zapier workflow I implemented. I cannot reproduce the exact company workflow here for confidentiality reasons.

The workflow:
1. Gather incoming lead emails.
2. Filter out potential spam.
3. Send filtered emails to an AI (Llama) API to determine whether they are potential leads.
4. Route potential leads to the active manager for the relevant region (the company has multiple regional branches).
5. Create leads in Copper CRM and notify the assigned manager via Messenger.

![Zapier workflow](/experience-md/bmgse/image2.png)

Example AI (Llama) service (FastAPI, Python):

```python
from fastapi import FastAPI
from pydantic import BaseModel
from openai import OpenAI

app = FastAPI()

client = OpenAI(
    base_url="https://integrate.api.nvidia.com/v1",
    api_key="YOUR_NVIDIA_API_KEY"
)

class ChatRequest(BaseModel):
    prompt: str

@app.post("/chat")
async def chat_api(request: ChatRequest):
    completion = client.chat.completions.create(
        model="meta/llama3-70b-instruct",
        messages=[{"role": "user", "content": request.prompt}],
        temperature=0.5,
        top_p=1,
        max_tokens=1024,
        stream=True
    )

    final_text = ""

    for chunk in completion:
        content = chunk.choices[0].delta.content
        if content:
            final_text += content

    return {"response": final_text}
```

---

### BMG IO (Insertion Order) WebApp — React & Python
I developed a web app for managing insertion orders (IO) using React for the frontend and Python for the backend. Authentication uses Google Sign-In restricted to company email addresses.

This project is a Next.js-based frontend application that provides user authentication, data visualization through charts, and integrations with services like Google, Zoho, and Windsor APIs. The project uses Material-UI for the design system and includes middleware-based route protection. The app dashboard aggregates IOs by client and manager, finalizes combined insertion orders, and generates PDFs for distribution. The backend retrieves data from third-party APIs and the frontend renders and downloads PDFs.

Login screenshot:
![BMGIO Login Page](/experience-md/bmgse/image3.png)

React PDF rendering / download snippet:

```jsx
// React component (excerpt)
return (
  <>
    {!isLoading ? (
      <PDFViewer download="BMG_IO.pdf" style={{ height: "100vh" }}>
        <ExpensesPDF expenses={IOexpenses || []} />
      </PDFViewer>
    ) : (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress />
      </Box>
    )}
    <PDFDownloadLink document={<ExpensesPDF expenses={IOexpenses || []} />} fileName="BMG_IO.pdf">
      {({ loading }) => (loading ? "Loading document..." : "Download now!")}
    </PDFDownloadLink>
  </>
);
```
The backend provides a collection of Python API utilities that integrate Google BigQuery, Zoho Expense APIs, Windsor.ai marketing data, and a collaborative filtering recommendation system. It includes multiple data retrieval functions for analytics—such as cryptocurrency transactions, Citibank financial metrics, GA4 session data, and geo-based reporting—along with user-based page recommendations via machine learning. The code also implements secure OAuth token refresh logic for Zoho, currency conversion using live exchange rates, and an automated workflow that aggregates expenses, advertising spend, and remaining budget for business insights.

Python: retrieving data from a third-party API (Zoho Expenses):

```python
def expenses(request={}, query_param={}):
    access_token = get_zoho_access_token()
    data_url = "https://www.zohoapis.com/expense/v1/reports/expensedetails"
    data_params = query_param if query_param else request.args.to_dict()
    data_headers = {
        "X-com-zoho-expense-organizationid": ZOHO_ORGANIZATION_ID,
        "Authorization": "Zoho-oauthtoken " + access_token,
    }
    data_response = requests.get(data_url, headers=data_headers, params=data_params)
    return data_response.json()
```

---

### CMS & E-commerce website development
I frequently collaborate with SEO teammates to improve user engagement and search rankings. Performance (FCP, LCP, CLS) and load times are critical, I use Lighthouse and similar tools to measure and optimize sites.

Most client sites use WordPress for faster development and customization. When needed, I implement custom templates (PHP/HTML/CSS/JS) and develop custom plugins to integrate with external systems (e.g., CRM). Security is always a priority — I apply best practices and vetted security plugins when appropriate.

Example sites I developed and maintained:

[Discover Taitung Website](https://discover.taitung.gov.tw/)

![Discover Taitung](/experience-md/bmgse/image4.png)

[Bet5Games Website](https://bet5games.com/)

![Bet5games](/experience-md/bmgse/image5.png)
