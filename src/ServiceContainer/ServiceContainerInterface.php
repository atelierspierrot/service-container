<?php
/**
 * This file is part of the Service Container package.
 *
 * Copyright (c) 2015-2016 Pierre Cassat <me@e-piwi.fr> and contributors
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * The source code of this package is available online at 
 * <http://github.com/atelierspierrot/service-container>.
 */

namespace ServiceContainer;

/**
 * A simple service container interface
 *
 * The "register" system will store a callback in the registry
 * with a specific name to use when trying to get a service.
 * The getter will throw an error by default if the service
 * does not exist, except when using the `FAIL_GRACEFULLY` constant.
 * Any service is overwritable by default but can be not using
 * the `$protected = true` register argument.
 *
 * @author  piwi <me@e-piwi.fr>
 */
interface ServiceContainerInterface
{

    /**
     * Use this constant to NOT throw error when trying to get an unknown service
     */
    const FAIL_GRACEFULLY = 1;

    /**
     * Use this constant to throw error when trying to get an unknown service
     *
     * This is the default behavior.
     */
    const FAIL_WITH_ERROR = 2;

    /**
     * Define a service constructor like `array( name , callback , protected )` or a closure
     *
     * @param   string      $name
     * @param   array       $provider A service array constructor like `array( name , callback , protected )`
     *          callable    $provider A callback as a closure that must return the service object: function ($name, $arguments) {}
     *          ServiceProviderInterface    $provider A `\ServiceContainer\ServiceProviderInterface` instance
     * @return mixed
     */
    public function setProvider($name, $provider);

    /**
     * Register a new service called `$name` declared as NOT protected by default
     *
     * @param   string          $name
     * @param   object|callable $callback
     * @param   bool            $protected
     * @return  mixed
     */
    public function setService($name, $callback, $protected = false);

    /**
     * Get a service called `$name` throwing an error by default if it does not exist yet and can not be created
     *
     * @param   string  $name
     * @param   array   $arguments
     * @param   int     $failure
     * @return  mixed
     */
    public function getService($name, array $arguments = array(), $failure = self::FAIL_WITH_ERROR);

    /**
     * Test if a service exists in the container
     *
     * @param   string  $name
     * @return  mixed
     */
    public function hasService($name);

    /**
     * Unset a service if it is not protected
     *
     * @param   string  $name
     * @return  mixed
     */
    public function unsetService($name);
}
