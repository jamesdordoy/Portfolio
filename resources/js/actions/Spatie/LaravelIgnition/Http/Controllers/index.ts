import HealthCheckController from './HealthCheckController'
import ExecuteSolutionController from './ExecuteSolutionController'
import UpdateConfigController from './UpdateConfigController'

const Controllers = {
    HealthCheckController: Object.assign(HealthCheckController, HealthCheckController),
    ExecuteSolutionController: Object.assign(ExecuteSolutionController, ExecuteSolutionController),
    UpdateConfigController: Object.assign(UpdateConfigController, UpdateConfigController),
}

export default Controllers