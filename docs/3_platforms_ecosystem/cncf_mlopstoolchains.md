# CNCF & MLOps Toolchains

The CNCF ecosystem provides open-source tools for building AI platforms.

## Example Tools

| Category                | Tool           | Purpose                      |
|:------------------------|:--------------|:-----------------------------|
| Workflow orchestration  | Airflow, Argo | Schedule and manage jobs     |
| Pipeline & MLOps        | Kubeflow      | End-to-end ML pipelines      |
| Experiment tracking     | MLflow        | Track runs, params, metrics  |
| Distributed data/compute| Apache Spark  | Large-scale data processing  |

Example Spark job (conceptual):

    spark-submit --class org.example.ETLJob app.jar
