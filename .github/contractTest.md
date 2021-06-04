## [INFSAAS-3923] 
 
### Overview of changes:
- added tests to ensure
  - a valid response is parsed correctly
  - a 409 is returned for duplicates
 
## Pull Request Checks for contract tests
- [ ] Does the consumer code make the expected request? (Pact consumer tests (Pact mock service))
- [ ] Does the consumer correctly handle the expected response? (Pact consumer tests (using your own assertions))
- [ ] Does the provider handle the expected request? (Pact provider tests (verifier))
- [ ] Does the provider return the expected response? (Pact provider tests (verifier))
- [ ] Ensure there are no functional tests (Does the provider do the right thing with the request? = Provider's own functional tests )
- [ ] Webhook is configured and has triggered provider test
- [ ] Pact is published and visible on PactFlow
