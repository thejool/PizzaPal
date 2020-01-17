# Pizza Pal
## Virtual assistant for ordering pizza

Pizza Pal is your best friend when it comes to pizza.
It helps you check the restaurants opening hours, menu and order pizza right through your assistant.

### Tech Stack
- Dialogflow
- Firebase
- Actions on google
- Node.js

### Setup
1. Import firebase agent (PizzaPalDialogflow.zip)
2. Clone git repo
3. Install node modules inside functions

4. Deploy function to firebase
$: firebase deploy --only functions

5. Create firebase firestore database
6. Create firebase realtime database


### Intents
- Default fallback intent (dialogflow)
- Default welcome intent (dialogflow)

- Opening Hours (dialogflow)
- See Menu (fulfillment)
- Order (fulfillment)
  - See Menu (fulfillment)
  - Select Pizza (fulfillment)
  - Select Pizza - yes (fulfillment)
  - Select Pizza - no (dialogflow)


### Troubleshooting
- Missing firebase credentials
- Missing dialogflow credentials
- Export google cloud credentials




This gives us a very good foundation for building a complete application with a frontend and backend.