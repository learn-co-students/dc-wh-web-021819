* Objectives
    - Review CRUD capabilities for single model
    - Create associations between two models
    - Use a dropdown select in a form
    - Create a model instance and its associated instances from a single form
        - `accepts_nested_attributes_for :snacks` on the retailer model
        - Add new params to retailer controller
        - in retailer/new include `@retailer.snacks.build`