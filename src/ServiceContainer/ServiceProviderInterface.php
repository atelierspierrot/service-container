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
 * Interface ServiceProviderInterface
 *
 * Use this to encapsulate a service.
 *
 * @author  piwi <me@e-piwi.fr>
 */
interface ServiceProviderInterface
{

    /**
     * Launch actions when the service is registered in the container
     *
     * @param   ServiceContainer $app
     * @return  void
     */
    public function register(ServiceContainer $app);

    /**
     * Launch actions when the service is created
     *
     * @param   ServiceContainer $app
     * @return  void
     */
    public function boot(ServiceContainer $app);

    /**
     * Launch actions when the service is destructed
     *
     * @param   ServiceContainer $app
     * @return  void
     */
    public function terminate(ServiceContainer $app);
}
